import { uiActions } from './ui-slice';

import {cartActions} from './cart-slice';

// Thunk Creator for sendind cart data
export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'sending cart data !',
      }))

      const sendRequest =  async () => {
        const response = await fetch('https://react-testing-c78d6-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify(cart),
        });

        if(!response.ok){
        throw new Error('Sending cart data failed')
        }
      }

      try{
        dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success...',
        message: 'sent cart data successfully !',
      }))
      await sendRequest();
      } catch(error){
        dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'sending cart data failed..!',
      }));
        
      }



    };
};

export const fetchCartData =() => {
    return async dispatch => {
        const fetchData = async () => {
            //Getting respoonse data from api and storing it in response
            const respose = fetch('https://react-testing-c78d6-default-rtdb.firebaseio.com/cart.json');
            //Throwing an error if it is..
            if(!respose.ok) {
                throw new Error(' Could not fetch data ');
            }
            // Converting into json
            const data = await respose.json();

            return data;
        }

        try {
           const cartData = await fetchData();
           dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
        dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'Fetching cart data failed..!',
      }));  
        }
    }
}