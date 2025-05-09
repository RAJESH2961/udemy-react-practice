import { createContext } from 'react';

export const CartContext = createContext({
    items: [],
    addItemToCart: () =>{},
}); //the createContext returns an object which we will need later

