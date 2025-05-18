import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
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
            const existingItem = updatedItems[existingCartItemIndex]
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
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);//It returns true if it found item else -1
        // 
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        //it is is 1 then there is only one element we need to remove entire element in the cart
        // THere are different ways to remove
        if(existingCartItem.quantity === 1){
            // splice takes index and no of items that should be spliced(remove) there 1 is remove one element
            updatedItems.splice(existingCartItemIndex, 1);
        }
        // else update the quantity
        else{
            const updatedItem = {
            ...existingCartItem,
            quantity : existingCartItem.quantity -1,

        }
        updatedItems[existingCartItemIndex] = updatedItem;
    }
        return {...state, items: updatedItems};
}
return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items:[]});

    function addItem(item){
        dispatchCartAction({type : 'ADD_ITEM', item: item});
    }
    function removeItem(id){
        dispatchCartAction({type : 'REMOVE_ITEM', id});
    }
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }
    console.log(cartContext);
    
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;