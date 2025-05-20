// 🔹 Importing helper functions from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';


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



export const authActions = authSlice.actions;

// 🔹 Exporting the configured store
export default authSlice.reducer;


