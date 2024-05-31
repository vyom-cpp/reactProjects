import React from 'react';
import TodoList from './components/to-do-list/TodoList';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import Calculator from './components/calculator/Calculator';
import ExpenseTracker from './components/expense-tracker/ExpenseTracker';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TicTacToe />
      <Calculator />
      <ExpenseTracker />
    </div>
  );
}

export default App;