import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TodoContainer from './components/TodoContainer.js';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
