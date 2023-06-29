import ShopListItem from "../ShopListItem/ShopListItem";
import "./ShopList.css"

export default function ShopList({ shopItems, handleAddToOrder }) {
    const ShopListJsx = shopItems.map((item, idx) =>
        <ShopListItem
            shopItem={item} key={idx} handleAddToOrder={handleAddToOrder} />
    )
    return (
        <div className="shop-list">
            {ShopListJsx}
        </div>
    )
}