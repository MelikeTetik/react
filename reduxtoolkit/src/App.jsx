import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './App.css'
import { decrement, increment } from './redux/counterSlice'

import UserList from './UserList';

function App() {
  const dispatch=useDispatch();

  const {value}=useSelector((store)=>store.counter);
  console.log(value);

  return (
    <div>
      <div>{value}</div>
      <div><button onClick={()=>dispatch(increment())}>Arttır</button></div>
      <div><button onClick={()=>dispatch(decrement())}>Arttır</button></div>
      <div><UserList/></div>
      

    </div>
   

  )


}

export default App