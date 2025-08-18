# Quote of the Day App

A simple React application that fetches a random quote from an API and displays it on the screen.

This project was built as a hands-on tutorial to learn core React and JavaScript concepts.

## Features

- Fetches a random quote on initial page load.
- Displays a new random quote when the user clicks a button.
- Handles network and API errors gracefully.
- Clean and simple user interface.

## Technologies Used

- **React:** For building the user interface.
- **`useState` Hook:** To manage the quote and author state.
- **`useEffect` Hook:** To perform the initial data fetching on component mount.
- **`async/await`:** For writing clean, readable asynchronous code.
- **`fetch` API:** To make network requests to the quote API.
- **`try...catch` Blocks:** For robust error handling.
- **CORS Proxy:** To resolve cross-origin resource sharing issues in the development environment.

## API

This project uses the [ZenQuotes API](https://zenquotes.io/) to get the quote data.

## How to Run Locally

1.  Clone the repository:
    `git clone https://github.com/YOUR_USERNAME/react-quote-of-the-day.git`
2.  Navigate to the project directory:
    `cd react-quote-of-the-day`
3.  Install the dependencies:
    `npm install`
4.  Start the development server:
    `npm start`

The application will be available at `http://localhost:3000`.

---
## 🚀 Live Demo
Click here to view the project: [Live Project](https://ladysquoteoftheday.netlify.app/)
