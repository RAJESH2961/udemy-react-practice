const redux = require('redux');

// 1. Reducer function
const countReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
    return state;
};

// 2. Create a Redux store
const store = redux.createStore(countReducer);

// 3. Subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// 4. Subscribe to the store
store.subscribe(counterSubscriber);

// 5. Dispatch an action
store.dispatch({ type: 'increment' }); // Output: { counter: 1 }
store.dispatch({ type: 'increment' }); // Output: { counter: 2 }
store.dispatch({ type: 'decrement' }); // Output: { counter: 1 }
store.dispatch({ type: 'decrement' }); // Output: { counter: 0 }
