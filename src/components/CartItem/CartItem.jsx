import './CartItem.css';

export default function CartItem({ cartItem, isPaid, handleChangeQty }) {
    return (
        <div class="cart-item">
            <div>{cartItem.item.name}</div>
            <div>
                ${cartItem.cartItemPrice.toFixed(2)}</div>
            <div>
                {!isPaid &&
                    <button onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty - 1)}>-</button>
                }
                {cartItem.qty}

                {!isPaid &&
                    <button
                        onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty + 1)}
                    >+</button>
                }
            </div>
        </div>
    );
}