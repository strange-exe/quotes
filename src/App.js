// src/App.js
import React, { useEffect, useState } from "react";
import Quote from "./Quote";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    // Fetch quotes when the component mounts
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        getRandomQuote(data);
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  // Get a random quote from the list
  const getRandomQuote = (quotesList) => {
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    setCurrentQuote(quotesList[randomIndex]);
  };

  // Handle click event to get a new quote
  const handleNewQuote = () => getRandomQuote(quotes);

  return (
    <div className="container">
      <header className="site-logo">Quote Generator</header>
      <main>
        {currentQuote && (
          <Quote quote={currentQuote.text} author={currentQuote.author} />
        )}
        <button onClick={handleNewQuote} className="new-quote-button">
          New Quote
        </button>
      </main>
    </div>
  );
};

export default App;
