require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');
const Order = require('./models/order');
const User = require('./models/user');


(async function () {
    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Cute', sortOrder: 100 },
        { name: 'Funny', sortOrder: 200 },
        { name: 'CanIHaz', sortOrder: 300 },
        { name: '#NotACat', sortOrder: 400 },
        { name: 'Retro', sortOrder: 500 },
        { name: 'Angry', sortOrder: 600 },
    ]);

    //     await Order.deleteMany({});
    //    let curruser = await User.findOne({});

    //     const orders = await Order.create([
    //         {
    //             user: curruser._id,
    //             cartItems: [],
    //             isPaid: false
    //         }
    //     ])

    //we delete all items when re-seeding the database to avoid duplicates
    await Item.deleteMany({});

    const items = await Item.create([
        {
            name: "Pkmn Onesie",
            image: "https://ae01.alicdn.com/kf/Sa18db0c2a8b24f8194471f6cc215ac61G/Women-Pajamas-Onesie-For-Adults-Kigurumi-Men-Sleepwear-Anime-Halloween-Cosplay-Costume-Cartoon-One-Piece-Pijama.jpg_Q90.jpg_.webp",
            description: "A Pokemon Onesie",
            link: "https://www.aliexpress.com/item/1005005183181149.html?spm=a2g0o.productlist.main.15.2f0440732mDDSI&algo_pvid=9d0ac26f-cee2-4d17-8d07-4f997401657b&algo_exp_id=9d0ac26f-cee2-4d17-8d07-4f997401657b-7&pdp_npi=3%40dis%21CAD%2157.2%2132.6%21%21%21%21%21%40212240a316877872100467405d0787%2112000032013053923%21sea%21CA%21721336510&curPageLogUid=RrvnkTVg4Hn6",
            category: categories[0],
            price: 32.60
        },
        {
            name: "Cute socks",
            image: "https://ae01.alicdn.com/kf/S8e44ed944f354fe2b053f07099ae6b30V/1Pairs-Couple-Five-Fingered-Sock-Cartoon-Lovely-Cotton-Breathable-Comfortable-5-Toe-splitting-Socks-For-Women.jpg_Q90.jpg_.webp",
            description: "Some adorable socks",
            link: "https://www.aliexpress.us/item/3256805538383367.html?spm=a2g0o.productlist.main.27.69532f45m4kuIa&algo_pvid=600394fa-53d5-4cec-9040-3135b434f6a7&algo_exp_id=600394fa-53d5-4cec-9040-3135b434f6a7-13&pdp_npi=3%40dis%21USD%213.72%211.82%21%21%21%21%21%402102196716877887861227126d077d%2112000034155594085%21sea%21US%210&curPageLogUid=u1gbXd2cloKo",
            category: categories[1],
            price: 1.82
        },
        {
            name: "Shark Hoodie",
            image: "https://ae01.alicdn.com/kf/S8e44ed944f354fe2b053f07099ae6b30V/1Pairs-Couple-Five-Fingered-Sock-Cartoon-Lovely-Cotton-Breathable-Comfortable-5-Toe-splitting-Socks-For-Women.jpg_Q90.jpg_.webp",
            description: "Funny Shark Patchwork Hoodies Man Autumn Kawaii Sweatshirt 2023 Casual Long Sleeve Pullover School Couple Clothes New",
            link: "https://www.aliexpress.us/item/3256805538383367.html?spm=a2g0o.productlist.main.27.69532f45m4kuIa&algo_pvid=600394fa-53d5-4cec-9040-3135b434f6a7&algo_exp_id=600394fa-53d5-4cec-9040-3135b434f6a7-13&pdp_npi=3%40dis%21USD%213.72%211.82%21%21%21%21%21%402102196716877887861227126d077d%2112000034155594085%21sea%21US%210&curPageLogUid=u1gbXd2cloKo",
            category: categories[0],
            price: 6.65
        },
        {
            name: "Sleeved Blanket - Teletubbies",
            image: "https://ae01.alicdn.com/kf/Sce2d3a98e7684b449979fa622a50f301U/Hooded-Blanket-Unisex-Teletubbies-Disi-Onesies-Lala-Cosplay-Winter-Cartoon-with-Sleeves-Blankets-Adult-Hoody-Pyjamas.jpg_220x220.jpg_.webp",
            description: "Hooded Blanket Unisex Teletubbies Disi Onesies Lala Cosplay Winter Cartoon with Sleeves Blankets Adult Hoody Pyjamas Anime Robe",
            link: "https://www.aliexpress.com/item/1005004760104187.html?spm=a2g0o.productlist.main.15.146557d9FDZtou&algo_pvid=108fc608-ba5f-4d42-87d2-5a341e2c082a&algo_exp_id=108fc608-ba5f-4d42-87d2-5a341e2c082a-7&pdp_npi=3%40dis%21CAD%2182.96%2139.0%21%21%21%21%21%40211bf04a16877869257628365d07a0%2112000030371817964%21sea%21CA%21721336510&curPageLogUid=0tiYdNbGkheL",
            category: categories[0],
            price: 6.65
        },
        {
            name: "Half-finger gloves for typing",
            image: "https://ae01.alicdn.com/kf/S15638e5538ce45abb645f0be02609b62L/2023-Retro-Sheepskin-Breathable-Leather-Motorcycle-Gloves-Racing-Gloves-Men-s-Motocross-Winter-Summer-Gloves-Half.jpg_220x220.jpg_.webp",
            description: "2023 Retro Sheepskin Breathable Leather Motorcycle Gloves Racing Gloves Men's Motocross Winter&Summer Gloves Half-finger gloves",
            link: "https://www.aliexpress.us/item/3256805513673861.html?spm=a2g0o.productlist.main.31.27993960jhF52Z&algo_pvid=690d1625-16d9-4fe1-9127-32a24a11bc61&algo_exp_id=690d1625-16d9-4fe1-9127-32a24a11bc61-15&pdp_npi=3%40dis%21USD%2132.77%2119.66%21%21%21%21%21%4021021a7216877891627084855d0744%2112000034049803644%21sea%21US%210&curPageLogUid=FXunKjb94Av1",
            category: categories[1],
            price: 19.66
        },
        {
            name: "Leg warmers",
            image: "https://ae01.alicdn.com/kf/H9ef8869fd61048b898a08fd969f03faf0/New-Japanese-Lolita-Sweet-Girl-Leg-Warmer-Knit-Socks-Wool-Ball-Knitted-Foot-Cover-Cosplay-Women.jpg_220x220.jpg_.webp",
            description: "New Japanese Lolita Sweet Girl Leg Warmer Knit Socks Wool Ball Knitted Foot Cover Cosplay Women Autumn Winter Heap Heap Socks",
            link: "https://www.aliexpress.us/item/3256803144832889.html?spm=a2g0o.productlist.main.19.1870111cQRqp2a&algo_pvid=e1e850c4-7c8d-4022-9b8b-8aa7ebf25e2a&aem_p4p_detail=202306260717319905750285141340000644133&algo_exp_id=e1e850c4-7c8d-4022-9b8b-8aa7ebf25e2a-9&pdp_npi=3%40dis%21USD%213.49%212.65%21%21%21%21%21%4021227f0f16877890518127501d0745%2112000025252826489%21sea%21US%210&curPageLogUid=9nuqTu4PkhDI&search_p4p_id=202306260717319905750285141340000644133_2",
            category: categories[1],
            price: 2.65
        },
        {
            name: "Mug Warmer",
            image: "https://ae01.alicdn.com/kf/Sb04c2ef09bde47b3b3cd8f61d077c6416/Portable-Mug-Heating-Coaster-Thermostatic-Smart-Mug-Warmer-Plate-Safety-Lightweight-Practical-Gadgets-for-Home-Office.jpg_220x220.jpg_.webp",
            description: "Portable Mug Heating Coaster Thermostatic Smart Mug Warmer Plate Safety Lightweight Practical Gadgets for Home Office Supplie",
            link: "https://www.aliexpress.us/item/3256805364624747.html?spm=a2g0o.productlist.main.1.5d5a7266wT6Dbf&algo_pvid=6d4d93c3-0183-4563-84bf-20d79c47cac8&algo_exp_id=6d4d93c3-0183-4563-84bf-20d79c47cac8-0&pdp_npi=3%40dis%21USD%2125.24%2111.86%21%21%21%21%21%4021021a7216877894377488298d0744%2112000033507605644%21sea%21US%210&curPageLogUid=dzWDRbJjRfoT",
            category: categories[4],
            price: 11.86
        },
        {
            name: "Desktop storage organizer",
            image: "https://ae01.alicdn.com/kf/Sa3db3a7c2246470da1405d75debbc9d1p/Desktop-Storage-Box-Rose-Gold-Mesh-Metal-Office-Supplies-Accessories-with-Drawer-for-Home-Office-Makeup.jpg_220x220.jpg_.webp",
            description: "Desktop Storage Box Rose Gold Mesh Metal Office Supplies Accessories with Drawer for Home Office Makeup Organizer",
            link: "https://www.aliexpress.us/item/3256805298152615.html?spm=a2g0o.productlist.main.87.5d5a7266wT6Dbf&algo_pvid=6d4d93c3-0183-4563-84bf-20d79c47cac8&algo_exp_id=6d4d93c3-0183-4563-84bf-20d79c47cac8-43&pdp_npi=3%40dis%21USD%2126.82%2118.77%21%21%21%21%21%4021021a7216877894377488298d0744%2112000033266923091%21sea%21US%210&curPageLogUid=eTo5AyBj1XJU",
            category: categories[2],
            price: 18.77
        },
        {
            name: "Message Note Holder",
            image: "https://ae01.alicdn.com/kf/H7cf74ac2a9db4a66bac704be53b0b02fR/Animal-Message-Note-Holder-Cute-Ornaments-Photo-Holder-Memo-Clip-Business-Card-Holder-Office-Home-Desk.jpg_220x220.jpg_.webp",
            description: "Animal Message Note Holder Cute Ornaments Photo Holder Memo Clip Business Card Holder Office Home Desk Decoration Accessories",
            link: "https://www.aliexpress.us/item/3256803017882105.html?spm=a2g0o.productlist.main.55.5d5a7266wT6Dbf&algo_pvid=000aee07-6bb1-4536-a128-bb50d95da328&algo_exp_id=000aee07-6bb1-4536-a128-bb50d95da328-27&pdp_npi=3%40dis%21USD%213.74%213.74%21%21%21%21%21%40211bec8616877897121667204d07af%2112000024647796977%21sea%21US%210&curPageLogUid=wTyMTKJthnhf",
            category: categories[2],
            price: 3.74
        },
        {
            name: "Stand Up Desk",
            image: "https://ae01.alicdn.com/kf/S84efc8469a3f400f826b2dc78f927744i/2023-ErGear-Height-Adjustable-Electric-Standing-Desk-48-x-24-Inches-Sit-Stand-up-Desk-Memory.jpg_220x220.jpg_.webp",
            description: "2023 ErGear Height Adjustable Electric Standing Desk 48 x 24 Inches Sit Stand up Desk Memory Computer Home Office Desk",
            link: "https://www.aliexpress.us/item/3256805321188989.html?spm=a2g0o.productlist.main.11.34001a59FhpOW3&algo_pvid=6453ee21-875b-496d-9c0e-a0f4802923c8&algo_exp_id=6453ee21-875b-496d-9c0e-a0f4802923c8-5&pdp_npi=3%40dis%21USD%21336.37%21168.19%21%21%21%21%21%40212250c216877871870882421d0745%2112000033349593075%21sea%21US%210&curPageLogUid=da1njy3yDNza",
            category: categories[2],
            price: 168
        },
        {
            name: "Treadmill Walking Pad",
            image: "https://ae01.alicdn.com/kf/S33878120f52c4727802308387435182ey/US-Stock-Under-Desk-Treadmill-Machine-Walking-Pad-for-Home-Office.jpg_220x220.jpg_.webp",
            description: "US Stock Under Desk Treadmill Machine Walking Pad for Home Office",
            link: "https://www.aliexpress.us/item/3256805324252087.html?spm=a2g0o.productlist.main.5.34051d6ew7fmuz&algo_pvid=fb5fa0c7-dc1b-42ce-b91e-4f7516c972b3&algo_exp_id=fb5fa0c7-dc1b-42ce-b91e-4f7516c972b3-2&pdp_npi=3%40dis%21USD%21286.0%21286.0%21%21%21%21%21%40210218bf16877879252867936d0743%2112000033359396216%21sea%21US%210&curPageLogUid=sFQyMizTHxhM",
            category: categories[2],
            price: 286
        },
        {
            name: "Lazy Computer Sofa Chair",
            image: "https://ae01.alicdn.com/kf/S1f5d0ce13daa40d28837177b0bc55d5aZ/Lazy-Computer-Sofa-Chair-Home-Comfortable-Sedentary-Backrest-Desk-Chair-Anchor-Live-Chair-Bedroom-Lazy-Chair.jpg_220x220.jpg_.webp",
            description: "Lazy Computer Sofa Chair Home Comfortable Sedentary Backrest Desk Chair Anchor Live Chair Bedroom Lazy Chair",
            link: "https://www.aliexpress.us/item/3256805420822774.html?spm=a2g0o.productlist.main.21.269b5dc7XtZE6E&algo_pvid=16d081f4-1d44-45d3-b594-7f92564a9e61&algo_exp_id=16d081f4-1d44-45d3-b594-7f92564a9e61-10&pdp_npi=3%40dis%21USD%21222.61%21189.22%21%21%21%21%21%40212248ba16877882107106270d0756%2112000033729658639%21sea%21US%210&curPageLogUid=UNFweellis6W",
            category: categories[2],
            price: 189
        },
    ]);




    process.exit();
})();