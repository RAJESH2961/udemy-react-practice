import { createStore } from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increament') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decreament') {
        return {
            counter: state.counter - 1
        }
    }

    //Increasing value bu 5
    if(action.type === 'increase') {
        return {
            counter: state.counter + action.value,
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
