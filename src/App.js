import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  });
  const fetchQuote = async () => {
    try {
      const response = await fetch("/.netlify/functions/quotes");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setQuote({
        text: data[0].q,
        author: data[0].a,
      });
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({
        text: "Failed to fetch a new quote.",
        author: "",
      });
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Quote of the Day</h1>
      </header>

      <main className="quote-card">
        <div className="quote-text">
          <p>{quote.text}</p>
        </div>

        <div className="quote-author">
          <p>- {quote.author}</p>
        </div>

        <button onClick={fetchQuote}>Get New Quote</button>
      </main>
    </div>
  );
}

export default App;
