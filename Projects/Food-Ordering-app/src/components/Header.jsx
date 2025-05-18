import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import cartContext from '../store/CartContext'
export default function Header() {
    const cartCtx = useContext(cartContext);
    //reduce is an default build in function in javascript
    //In this case it will go to every item in items and adds their quantity not only item quantity
    const totalCartItems = cartCtx.items.reduce((totalNumberofItems, item) => {
        return totalNumberofItems + item.quantity;
    }, 0);
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="A restaurant logo" />
            <h1>Foodie</h1>
        </div>
        <nav>
            <Button textOnly> Cart ({totalCartItems})</Button>
        </nav>
    </header>
}