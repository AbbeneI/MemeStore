import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import "./App.css";
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from "../../components/NavBar/NavBar"
import Shop from "../Shop/Shop";

import { getUser } from "../../utilities/users-service"


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/shop" element={<Shop />} />
              {/* <Route path="/shop/items/:id" element={<ShopListItemShow />} /> */}
              {/* <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} /> */}
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>

          :
          <AuthPage setUser={setUser} />
      }

    </main>
  );
}
