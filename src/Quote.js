// src/Quote.js
import React from "react";

const Quote = ({ quote, author }) => (
  <div className="quote-box">
    <p className="quote-text">"{quote}"</p>
    <p className="author-text">- {author || "Unknown"}</p>
  </div>
);

export default Quote;
