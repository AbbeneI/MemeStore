import { Link } from "react-router-dom"
import ShopListItemShow from "../ShopListItemShow/ShopListItemShow"
import "./ShopListItem.css"

export default function ShopListItem({ shopItem, handleAddToOrder }) {
    let itemDetail = `/items/${shopItem._id}`;
    return (
        <div className="shop-list-item">
            {/* <Link to="/">Store Front</Link> */}

            {/* <Link to{`/items/${shopItem._id}`} >    </Link> */}
            {/* <Link to={itemDetail}> */}
            <img src={shopItem.image} alt="" />
            <div>{shopItem.name}</div>

            <div>${shopItem.price}</div>
            <div>{shopItem.description}</div>
            {/* </Link> */}
            <button onClick={() => handleAddToOrder(shopItem._id)}>Add to Cart</button>
        </div >
    );
}