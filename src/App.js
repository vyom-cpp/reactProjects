import React from 'react';
import TodoList from './components/to-do-list/TodoList';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TicTacToe />
    </div>
  );
}

export default App;