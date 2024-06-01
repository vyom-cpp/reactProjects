// src/ExpenseTracker.js
import React, { useState } from 'react';
import './ExpenseTracker.css';

function ExpenseTracker() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (expense && amount) {
      setExpenses([...expenses, { expense, amount: parseFloat(amount) }]);
      setExpense('');
      setAmount('');
    }
  };

  return (
    <div className={`expense-tracker ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="toggle-icon" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <i className="fa-solid fa-lightbulb"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </div>
      <h1>Expense Tracker</h1>
      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((item, index) => (
          <li key={index} className="expense-item">
            {item.expense}: ${item.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;