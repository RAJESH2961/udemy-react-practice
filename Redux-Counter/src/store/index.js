// 🔹 Importing helper functions from Redux Toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit';

// 🔹 Initial state for the counter slice
//    - counter: numeric value
//    - showCounter: boolean flag to toggle counter visibility
const initialCounterState = {
    counter: 0,
    showCounter: true
};

// 🔹 Creating the counter slice using createSlice()
const counterSlice = createSlice({
    name: 'counter', // Unique slice name (used in action types)
    initialState: initialCounterState,
    reducers: {
        // Increment counter by 1
        increament(state) {
            state.counter++; // Immer handles mutation safely
        },

        // Decrement counter by 1
        decrement(state) {
            state.counter--;
        },

        // Increase counter by a dynamic payload value
        increase(state, action) {
            state.counter += action.payload;
        },

        // Toggle the visibility of the counter
        toggle(state) {
            state.showCounter = !state.showCounter;
        },

        // Reset counter to its initial value
        reset(state) {
            state.counter = initialCounterState.counter;
        }
    }
});

// 🔹 Initial state for authentication slice
const intialAuthState = {
    isAuthenticated: false
};

// 🔹 Creating the authentication slice
const authSlice = createSlice({
    name: 'authentication', // Slice name
    initialState: intialAuthState,
    reducers: {
        // Set authentication to true
        login(state) {
            state.isAuthenticated = true;
        },

        // Set authentication to false
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// 🔹 Configuring the store with multiple reducers
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,  // State managed under `state.counter`
        auth: authSlice.reducer         // State managed under `state.auth`
    }
});

// 🔹 Exporting the configured store
export default store;

// 🔹 Exporting the auto-generated actions from both slices
// These will be used inside components to dispatch actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
