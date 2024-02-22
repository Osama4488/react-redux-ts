import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {increment,decrement} from "./redux/slices/counter"
function App() {

  const count = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Count is {count}</h1>
      
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button style={{marginTop:"20px"}} className='mt-[20px]' onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
