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
                {/* {order.isPaid ?
                    <span>ORDER <span className="smaller">{order.orderId}</span></span>
                    :
                    <span>NEW ORDER</span>
                } */}
                <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
            </div>
            <div>
                {cartItems}
            </div>
            <button onClick={() => handleCheckout()}>Checkout</button>

            {/* <div className="cart-item-container flex-ctr-ctr flex-col scroll-y">
                {cartItems.length ?
                    <>
                        {cartItems}
                        <section className="total">
                            {order.isPaid ?
                                <span className="right">TOTAL&nbsp;&nbsp;</span>
                                :
                                <button
                                    className="btn-sm"
                                    onClick={handleCheckout}
                                    disabled={!cartItems.length}
                                >CHECKOUT</button>
                            }
                            <span>{order.totalQty}</span>
                            <span className="right">${order.orderTotal.toFixed(2)}</span>
                        </section>
                    </>
                    :
                    <div className="hungry">Hungry?</div>
                } */}
        </div >
    );
}
// export default function OrderDetail() {
//     return (
// <>
// line items will go here aka order detail page
// </>
//     );
// }