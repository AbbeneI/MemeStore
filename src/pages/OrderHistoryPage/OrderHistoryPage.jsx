import { checkToken } from "../../utilities/users-service"

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import * as ordersAPI from '../../utilities/orders-apis';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';

export default function OrderHistory() {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }
    return (
        <>
            <h1>Order History Page</h1>
            <button onClick={handleCheckToken}>Check when my login expires</button>
            
        </>
    )
}