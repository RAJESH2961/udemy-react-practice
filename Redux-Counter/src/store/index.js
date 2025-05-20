//index.js 
// Here the showCOunter is added to work eith multiple states
// it will be false when i click toggle button in Counter.js
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
    if(action.type === 'increament') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'decreament') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    //Increasing value bu 5
    if(action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        }
    }
		// Setting the state to false when it is triggered
		// Setting the state to true when it is triggered
		// SO that we can toggle between states
    if(action.type === 'toggle'){
        return{
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }


        if(action.type === 'resetCounter'){
        return{
            showCounter: state.showCounter,
            counter: initialState.counter
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
