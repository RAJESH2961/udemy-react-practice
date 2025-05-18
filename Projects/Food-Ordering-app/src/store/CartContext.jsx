import { createContext, useReducer, useState } from "react";

const cartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

// If ADD_ITEM:
//    → Check if item is already in cart
//       - If yes: increase quantity
//       - If no: add item with quantity = 1
//    → Return new state with updated items array


function cartReducer(state,action){
    if(action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);//It returns true if it found item else -1

        const updatedItems = [...state.items];

        //if it is >-1 that element is exist in the items[]
        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity +1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        // else we need to add item in the items[]
        else{
            updatedItems.push({...action.item, quantity: 1});
        }
        return {...state, items: updatedItems};
    }

    if(action.type === 'REMOVE_ITEM') {

    }
    return state;
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, {items:[]});
    return <cartContext>{children}</cartContext>
}

export default cartContext;