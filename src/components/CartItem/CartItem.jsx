import './CartItem.css';

export default function CartItem({ cartItem, isPaid, handleChangeQty }) {
    return (
        <div>
            <div>{cartItem.item}</div>

            <div>{cartItem.item.name}</div>
            <span>{cartItem.item.price.toFixed(2)}</span>
            <div>
                {!isPaid &&
                    <button onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty - 1)}></button>
                }
            </div>
            <div>
                {!isPaid &&
                    <button
                        onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty + 1)}
                    ></button>
                }
            </div>
            <div>${cartItem.cartItemPrice.toFixed(2)}</div>
        </div>
    );
}