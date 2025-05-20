import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  // Triggering the method in store using useDispatch()
  const dispatch = useDispatch();
  // getting total quantity from store using useSelector()
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () =>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
