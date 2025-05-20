import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

// The problem is when some data is in backend firebase
// If app component mounted for the first time the data in database is lost
// SO to prevent this we need to maintain a variable
let isInitial = true;

function App() {
  const showCart =  useSelector(state => state.ui.cartisVisible);
  const dispatch = useDispatch();
  //getting cart data
  const cart = useSelector((state) => state.cart);

  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    const sendCartData = async () =>{
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'sending cart data !',
      }))
      const response = await fetch('https://react-testing-c78d6-default-rtdb.firebaseio.com/cart.json',{
      method: 'PUT',
      body: JSON.stringify(cart),
    });

    if(!response.ok){
      throw new Error('Sending cart data failed')
    }
    dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success...',
        message: 'sent cart data successfully !',
      }))
    // const responseData = await response.json();

    };

    if(isInitial) {
      isInitial = false;
      return;
    }

    //calling the function this is async so it retun a promise
    sendCartData().catch((error) =>{
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error...',
        message: 'sending cart data failed..!',
      }));
    });
    
  }, [cart, dispatch]);
  return (
    <>
    <Layout>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      {showCart && <Cart /> }
      <Products />
    </Layout>
    </>
  );
}

export default App;
