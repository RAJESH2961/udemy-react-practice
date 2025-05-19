import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';// useSelector is a hook developed by react-redux

const Counter = () => {
  const dispatch = useDispatch();// It will return an function we can pass arguments to it 

  const counter = useSelector(state => state.counter);// Accepts function and executed bu redux-react
  
  const increamentHandler = () => {
    // when we call this function it will dispatch an action against our react store
    dispatch({ type: 'increament' })
  };
  const decrementHandler = () => {
    dispatch({ type: 'decreament' })
  };
  
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter+1}</div>
      <div className='counter'>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
