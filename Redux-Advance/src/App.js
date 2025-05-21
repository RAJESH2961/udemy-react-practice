import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

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
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }

    if(cart.changed){
    dispatch(sendCartData(cart));
    }

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
