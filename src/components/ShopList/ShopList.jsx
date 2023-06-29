import ShopListItem from "../ShopListItem/ShopListItem";

export default function ShopList({ shopItems, handleAddToOrder }) {
    const ShopListJsx = shopItems.map((item, idx) =>
        <ShopListItem
            shopItem={item} key={idx} handleAddToOrder={handleAddToOrder} />
    )
    return (
        <>
            {ShopListJsx}
        </>
    )
}