import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";

export default function Checkout(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice+item.quantity * item.price, 0);

    //handle close called using userProgressCtx
    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new Formdata(event.target);
        const customerData = Object.fromEntries(fd.entries());


    }

    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form action="" onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input label="Full Name" type="text" id="full-name" />
            <Input label="E-mail Address" type="email" id="email" />
            <Input label="Street" type="text" id="street" />
            <div className="control-row">
                <Input label="Postel Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>
            <p className="modal-actions">
                {/* //Type = button to prevent submission int the form */}
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
}