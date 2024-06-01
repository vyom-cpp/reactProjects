import React from 'react';
import TodoList from './components/to-do-list/TodoList';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import Calculator from './components/calculator/Calculator';
import ExpenseTracker from './components/expense-tracker/ExpenseTracker';
import LightDarkMode from './components/light-dark-mode';
import QRCodeGenerator from './components/qr-code-generator';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import GithubProfileFinder from './components/github-profile-finder';

import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TicTacToe />
      <Calculator />
      <ExpenseTracker /> 
      <LightDarkMode />
      <QRCodeGenerator />
      <ModalTest />
      <TabTest />
      <RandomColor />
      <StarRating />
      <GithubProfileFinder />
    </div>
  );
}

export default App;