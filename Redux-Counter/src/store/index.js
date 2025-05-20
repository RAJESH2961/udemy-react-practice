// 🔹 Importing helper functions from Redux Toolkit
import {  configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import authReducer from './auth'


// 🔹 Configuring the store with multiple reducers
const store = configureStore({
    reducer: {
        counter: counterReducer,  // State managed under `state.counter`
        auth: authReducer        // State managed under `state.auth`
    }
});

// 🔹 Exporting the configured store
export default store;


