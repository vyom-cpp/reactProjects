// src/components/quote-machine/QuoteMachine.js
import React, { useState, useEffect, useCallback } from 'react';
import './QuoteMachine.css';

const QuoteMachine = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [color, setColor] = useState('#' + Math.floor(Math.random() * 16777215).toString(16));
  const [textColor, setTextColor] = useState('#000');

  const generateRandomColor = useCallback(() => {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    while (color === '#FFFFFF' || color === '#000000') {
      color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    return color;
  }, []);

  const adjustTextColor = useCallback((bgColor) => {
    const rgb = parseInt(bgColor.slice(1), 16); // Convert hex to RGB
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000; // Calculate brightness

    setTextColor(brightness > 125 ? '#000' : '#FFF'); // Light background -> dark text, dark background -> light text
  }, []);

  const fetchQuote = useCallback(async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
      setColor(generateRandomColor());
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }, [generateRandomColor]);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  useEffect(() => {
    document.body.style.backgroundColor = color;
    adjustTextColor(color);
  }, [color, adjustTextColor]);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div id="quote-box" style={{ color: textColor }}>
      <div className="quote-container" style={{ backgroundColor: color, boxShadow: `0 0 20px ${textColor}` }}>
        <h2 id="text">{quote.text}</h2>
        <p id="author">- {quote.author}</p>
        <button id="new-quote" onClick={handleNewQuote} style={{ backgroundColor: textColor, color: color }}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteMachine;