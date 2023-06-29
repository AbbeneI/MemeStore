import ShopList from "../../components/ShopList/ShopList";
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import * as itemsAPI from "../../utilities/items-apis"
import * as ordersAPI from "../../utilities/orders-apis"
import { Link, useNavigate } from 'react-router-dom';
import "./Shop.css"

import { useState, useEffect, useRef } from 'react';

export default function Shop() {

    const [shopItems, setShopItems] = useState([])
    const categoriesRef = useRef([])
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();
    const [activeOrder, setActiveOrder] = useState(null);

    useEffect(() => {
        async function getItems() {
            const items = await itemsAPI.getAll();
            categoriesRef.current = [...new Set(items.map(item => item.category.name))];
            setShopItems(items);
        }
        getItems();

        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, [])

    /*--- Event Handlers ---*/
    async function handleAddToOrder(itemId) {
        // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart);
    }

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
    }

    // async function clearCart() {
    //     const updatedCart = await ordersAPI.getCart();
    //     updatedCart.cartItems = [];
    //     setCart(updatedCart)
    // }



    return (
        <>
            <div className="side-nav">
                <CategoryList categories={categoriesRef.current} />
            </div>

            <div className="shop">
                <div className="discover-container">
                    <h1>Discover</h1>
                    <div className="main-content">
                        <div className="content">
                            <div className="title-container">
                                <h2>What’s the funniest cat meme ever made?</h2>
                            </div>
                            <div className="author-container"></div>
                        </div>
                        <div className="content">
                            <h2>What’s the second funniest cat meme ever made?</h2>
                        </div>
                    </div>
                </div>
                {/* <button onClick={() => clearCart()}>Clear Cart</button> */}
                <OrderDetail
                    order={cart}
                    handleChangeQty={handleChangeQty}
                    handleCheckout={handleCheckout}
                />
                {shopItems.length ?
                    <ShopList
                        shopItems={shopItems}
                        handleAddToOrder={handleAddToOrder}
                        handleCheckout={handleCheckout}
                        handleChangeQty={handleChangeQty}
                    />
                    :
                    <div>
                        loading...
                    </div>
                }
            </div>
            <div className="item-list"></div>
        </>
    )
}