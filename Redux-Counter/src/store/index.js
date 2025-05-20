// Importing functions from Redux Toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit';

// 🔹 Initial state with two properties: counter and showCounter
// counter is a number; showCounter is a boolean used to toggle UI display
const initialState = { counter: 0, showCounter: true }

// 🔹 Creating a Redux slice for the counter feature
const counterSlice = createSlice({
    // Unique name for the slice (used to prefix action types like 'counter/increment')
    name: 'counter',

    // Initial state for this slice
    initialState,

    // Reducer functions to handle different actions
    reducers: {
        // Action to increment the counter by 1
        increament(state) {
            // Redux Toolkit uses Immer, so direct state mutation is allowed here
            state.counter++;
        },

        // Action to decrement the counter by 1
        decrement(state) {
            state.counter--;
        },

        // Action to increase the counter by a dynamic value (provided via action.payload)
        increase(state, action) {
            state.counter = state.counter + action.payload; // Note the payload name should be same because redux toolkit uses internally
        },

        // Action to toggle the visibility of the counter
        toggle(state) {
            state.showCounter = !state.showCounter; // Flips true/false
        },
        // Action to toggle the visibility of the counter
        reset(state) {
            state.counter = initialState.counter
        }
    }
});

// 🔹 Creating and configuring the Redux store with the reducer from our slice
const store = configureStore({
    reducer: counterSlice.reducer // You can also use { counter: counterSlice.reducer } for named slices
});

// 🔹 Exporting the store so it can be provided to the React app
export default store;

// Export the actions to use them in components
export const counterActions = counterSlice.actions;

// these actions will contain all the methods declered in slice
