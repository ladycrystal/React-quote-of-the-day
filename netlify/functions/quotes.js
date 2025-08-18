exports.handler = async (event, context) => {
  try {
    const fetch = (await import('node-fetch')).default;
    
    const response = await fetch('https://zenquotes.io/api/random');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Quote API Error:', error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        error: 'Failed to fetch quote',
        message: error.message 
      }),
    };
  }
};