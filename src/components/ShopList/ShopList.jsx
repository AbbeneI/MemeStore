import ShopListItem from "../ShopListItem/ShopListItem";

export default function ShopList({ shopItems }) {
    console.log("Shop items in shoplist", shopItems);
    const ShopListJsx = shopItems.map((item, idx) =>
        <ShopListItem
            shopItem={item} key={idx} />
    )
    return (
        <>
            {/* <div>will map through each menu list item</div> */}
            {ShopListJsx}
        </>
    )
}