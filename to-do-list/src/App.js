import React, { useState } from 'react';
import './TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

function TodoList() {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);
  // State to store the current todo input
  const [inputValue, setInputValue] = useState('');
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to handle adding a new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      // Add new todo to the list
      setTodos([...todos, inputValue]);
      // Clear input field
      setInputValue('');
    }
  };

  // Function to handle removing a todo
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`todo-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="theme-toggle-container">
        <button className={`theme-toggle-button ${darkMode ? 'dark-mode' : 'light-mode'}`} onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={faLightbulb} className="theme-toggle-icon" />
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <h1 className="todo-title">Todo List</h1>
      <div className="input-container">
        {/* Input field for adding new todo */}
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        {/* Button to add todo */}
        <button className="add-button" onClick={addTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {/* Render the list of todos */}
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            {/* Button to remove todo */}
            <button className="remove-button" onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;