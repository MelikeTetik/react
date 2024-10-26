import React, { useState } from 'react';
import '../css/todo.css';

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const clearInput=()=>{
    setNewTodo('');
  }

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo
    };
    onCreateTodo(request);
    setNewTodo(''); // Input alanını temizle
  };

  return (
    <div className='todo-create'>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className='todo-input'
        type='text'
        placeholder='Todo Giriniz'
      />
      <button
        onClick={createTodo}
        className='todo-create-button'
      >
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;



