import './OrderDetail.css';
import CartItem from '../CartItem/CartItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
    if (!order) return null;

    const cartItems = order.cartItems.map(item =>
        <CartItem
            cartItem={item}
            isPaid={order.isPaid}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    );


    return (
        <div className="order-detail">
            Cart
            <div className="section-heading">

                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div>
                {cartItems}
            </div>
            <button onClick={() => handleCheckout()}>Checkout</button>
        </div >
    );
}
