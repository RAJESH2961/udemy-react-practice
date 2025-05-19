import classes from './Counter.module.css';
import { useSelector } from 'react-redux';// useSelector is a hook developed by react-redux

const Counter = () => {

  const counter = useSelector(state => state.counter);// Accepts function and executed bu redux-react
  
  
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter+1}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
