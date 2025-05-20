//Counter.js
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';// useSelector is a hook developed by react-redux

import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();// It will return an function we can pass arguments to it 

  const counter = useSelector(state => state.counter.counter);// Accepts function and executed bu redux-react
	// Here the show will get the state true or false 
	// According to that the div will be toggles
  const show = useSelector(state => state.counter.showCounter);
  
  const increamentHandler = () => {
    // when we call this function it will dispatch an action against our react store
    dispatch(counterActions.increament())
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  //Increamrnt by 5
    const increaseHandler = () => {
    dispatch(counterActions.increase(5)) //{ type: 'SOME_UNIQUE_IDENTIFIER, payload: 5 } internally passes
    //Always the 2nd argument is payload the first one is unique indentifier
  };
  // Calling toggle state in the redux
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

    // CallingReset in the redux
  const resetCounter = () => {
    dispatch(counterActions.reset())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div> }
      <div className='counter'>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increament by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </main>
  );
};

export default Counter;