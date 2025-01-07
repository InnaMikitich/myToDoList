import React from 'react';
import styles from './App.module.css';
import TodoList from './TodoList';

function App() {
  return (
    <div class={styles.app}>
      <div class={styles.box}>
        <h2>To Do List</h2>
      <TodoList />
      </div>
    </div>
  );
}

export default App;
