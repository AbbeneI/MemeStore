import { checkToken } from "../../utilities/users-service"

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import * as ordersAPI from '../../utilities/orders-apis';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

export default function OrderHistory({ user, setUser }) {
    const [orders, setOrders] = useState([]);
    const [activeOrder, setActiveOrder] = useState(null);

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    useEffect(function () {
        async function getOrders() {
            const orders = await ordersAPI.getAllForUser();
            setActiveOrder(orders[0] || null);
            setOrders(orders);
        }
        getOrders();
    }, [])

    return (
        <>
            <h1>Order History Page</h1>
            <OrderList
                orders={orders}
                activeOrder={activeOrder}
                setActiveOrder={setActiveOrder}
            />

            {/* <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link> */}

            {/* <button onClick={handleCheckToken}>Check when my login expires</button> */}

        </>
    )
}