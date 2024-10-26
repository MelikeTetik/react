import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../css/todo.css'

function Todo({todo,onRemoveTodo,onUpdateTodo}) {
  const{id,content}=todo;
  const[editable,setEditable]=useState(false);
  const[newTodo,setNewTodo]=useState(todo.content);

  const removeTodo=()=>(
    onRemoveTodo(todo.id)
  )

  const updateTodo=()=>{
    const request={
      id:todo.id,
      content:newTodo
    
   
    }
    onUpdateTodo(request);
    setEditable(false);
  }


  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',border:'1px solid lightgrey',padding:'10px',marginTop:'10px'}}>
      <div>
        {editable ? <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}
        style={{width:'380px'}} className='todo-input' type='text'/>:todo.content}
   
      </div>
      <div>
        <IoMdRemoveCircleOutline  className='todo-icons'onClick={removeTodo}/>
        {
          editable ? <FaCheck className='todo-icons'onClick={updateTodo}/>:   <FaEdit  className='todo-icons' onClick={()=>setEditable(true)}/>
        }
        
        
        
     
        
      </div>
      </div>
    
    )
   
   
}

export default Todo

