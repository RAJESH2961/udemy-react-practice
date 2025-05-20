import { createSlice } from '@reduxjs/toolkit';
//index.js 
// Here the showCOunter is added to work eith multiple states
// it will be false when i click toggle button in Counter.js
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true }


// Creating a slice of the Redux state for the "counter" feature
createSlice({
    // Unique name for this slice (used in action types like 'counter/increament')
    name: 'counter',

    // Initial state of this slice
    initialState,

    // Reducers: Define how the state should change based on actions
    reducers: {
        // Increments the counter value by 1
        increament(state) {
            // Thanks to Immer (used internally by Redux Toolkit), we can safely mutate state
            state.counter++;
        },

        // Decrements the counter value by 1
        decrement(state) {
            state.counter--;
        },

        // Increases the counter by a custom value passed in the action payload
        increase(state, action) {
            // action.payload is preferred over action.amount
            state.counter = state.counter + action.payload;
        },

        // Toggles the visibility of the counter (true <-> false)
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

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
