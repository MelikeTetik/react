import { useState } from 'react'
import './css/todo.css'

import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {

  const[todos,setTodos]=useState([]);

  const createTodo=(newTodo)=>{
    setTodos([...todos,newTodo]);
  }

  const removeTodo=(todoId)=>{
    setTodos([...todos.filter((todo)=>todo.id !== todoId)]);
  }

  const updateTodo=(newTodo)=>{
    const updateTodos=todos.map((todo)=>{
      if(todo.id !==newTodo.id){
        return todo;
      }
      return newTodo;
    })
    setTodos([...updateTodos])
  }
  console.log(todos)
  

  return (
    <div className='App'>
      <div className='main'>
          <TodoCreate onCreateTodo={createTodo}/>
          <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo}/>
      </div>
      
    </div>
  
  )
}

export default App
