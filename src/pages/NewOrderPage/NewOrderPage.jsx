import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from "../../utilities/items-apis"
export default function NewOrderPage({ user, setUser }) {
    const [menuItems, setMenuItems] = useState([]);
    const categoriesRef = useRef([]);


    useEffect(function () {
        async function getItems() {
            const items = await itemsAPI.getAll();
            categoriesRef.current = [...new Set(items.map(item => item.category.name))];

            setMenuItems(items);
        }
        getItems();
    }, []);

    return (
        <h1>New Order Page</h1>
    )
}