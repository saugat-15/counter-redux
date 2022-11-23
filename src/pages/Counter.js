// import logo from './logo.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './App.css';
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from '../redux/features/counterSlice'
import {updateName} from '../redux/features/nameSlice'

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const counter = useSelector(state => state.counter.counter);
  const name = useSelector(state => state.name.name)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const divStyle = {
    // display: "flex",
    // flexDirection: "column",
    textAlign: 'center',
    alignItems: 'center',
    padding: '10px',
    justifyContent: "center",
    margin: "20%",
  };

  const redirectToWelcome = () => {
    navigate("/");
  };
  return (
    <div className="Counter" style={ divStyle }>
      <span>Counter: {counter}</span>
      <br />
      <span>Name: {name}</span>
        <br />
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <input onChange={(e) => dispatch(updateName(e.target.value))}/>
      <button onClick={redirectToWelcome}>Home</button>
    </div>
  );
}

export default Counter;
