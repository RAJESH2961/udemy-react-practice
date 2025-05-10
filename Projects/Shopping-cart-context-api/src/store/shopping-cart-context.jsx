import { createContext } from 'react';
import { useState, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';
// import { use } from 'react';

function shoppingCartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
    const updatedItems = [...state.items];
      const index = updatedItems.findIndex((item) => item.id === action.payload);
      const existingItem = updatedItems[index];

      if (existingItem) {
        updatedItems[index] = { ...existingItem, quantity: existingItem.quantity + 1 };
      } else {
        const product = DUMMY_PRODUCTS.find((p) => p.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {...state,//Here the state is not needed because we have only one value
         items: updatedItems };
    }
    if(action.type === 'UPDATE_ITEM'){
        // setShoppingCart((prev) => {
      const updatedItems = [...state.items];
      const index = updatedItems.findIndex((item) => item.id === action.payload.productId);
      const updatedItem = { ...updatedItems[index] };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index] = updatedItem;
      }

      return {...state, items: updatedItems };
    // });
    }
    return state;
}

export const CartContext = createContext({
    items: [],
    addItemToCart: () =>{},
    updateItemQuantity: () =>{},
}); //the createContext returns an object which we will need later

export default function CartContextProvider({children}){
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer,{ items: [] } );
    // const [shoppingCart, setShoppingCart] = useState({ items: [] });

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: id,
    });

  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
        type: 'UPDATE_ITEM',
        payload:{
            productId : productId,
            amount: amount
}
    })
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
// ✅ Correct (matches the actual function name you defined)
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  return <CartContext.Provider value={ctxValue}>
    {children}
  </CartContext.Provider>
}