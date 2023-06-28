import ShopList from "../../components/ShopList/ShopList";
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import * as itemsAPI from "../../utilities/items-apis"
import * as ordersAPI from "../../utilities/orders-apis"

import "./Shop.css"

import { useState, useEffect, useRef } from 'react';

export default function Shop() {

    const [shopItems, setShopItems] = useState([])
    const categoriesRef = useRef([])
    const [cart, setCart] = useState(null);


    useEffect(() => {
        async function getItems() {
            const items = await itemsAPI.getAll();
            categoriesRef.current = [...new Set(items.map(item => item.category.name))];
            console.log("current categories", categoriesRef.current)
            setShopItems(items);
        }
        getItems();

        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, [])



    return (
        <>
            <div className="side-nav">
                <CategoryList categories={categoriesRef.current} />
            </div>

            <div className="shop">
                <div className="discover-container">
                    <h3>Discover</h3>
                    <div className="main-content">
                        <div className="content-1"></div>
                        <div className="content-2"></div>
                    </div>
                </div>
                {shopItems.length ?
                    <ShopList shopItems={shopItems} />
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