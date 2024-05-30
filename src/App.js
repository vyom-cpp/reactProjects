import React from 'react';
import TodoList from './components/to-do-list/TodoList';
// import Game from '../tic-tac-toe/TicTacToe';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      {/* <Game /> */}
    </div>
  );
}

export default App;