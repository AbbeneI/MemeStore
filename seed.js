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
            name: "Woman Yells At Cat",
            image: "https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg",
            description: "",
            link: "https://hips.hearstapps.com/hmg-prod/images/womanyellingcat-1573233850.jpg",
            category: categories[0],
            price: 3.45
        },
        {
            name: "Buff Cat",
            image: "https://ctl.s6img.com/society6/img/CnFTfKZu5-Aebu2t1YyEdwFKs4M/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/5653cd36be88468b8387ee851c6e5cc0/~~/buff-cat-meme-prints.jpg?attempt=0",
            description: "",
            link: "https://ctl.s6img.com/society6/img/CnFTfKZu5-Aebu2t1YyEdwFKs4M/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/5653cd36be88468b8387ee851c6e5cc0/~~/buff-cat-meme-prints.jpg?attempt=0",
            category: categories[0],
            price: 6.71
        },
        {
            name: "How It Feels Sharing My Bed With The Cat",
            image: "https://www.boredpanda.com/blog/wp-content/uploads/2023/05/cats-memes-funny-pics-cover_800.jpg",
            description: "",
            link: "https://www.boredpanda.com/blog/wp-content/uploads/2023/05/cats-memes-funny-pics-cover_800.jpg",
            category: categories[1],
            price: 0.98
        },
        {
            name: "Cat With Croc",
            image: "https://ctl.s6img.com/society6/img/r9OShY5DHe1Y3TcleFrj9iYrUrU/w_1500/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8628f2121c9d4983a671a76c7c6089d4/~~/croc-cat-meme-prints.jpg",
            description: "",
            link: "https://ctl.s6img.com/society6/img/r9OShY5DHe1Y3TcleFrj9iYrUrU/w_1500/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8628f2121c9d4983a671a76c7c6089d4/~~/croc-cat-meme-prints.jpg",
            category: categories[0],
            price: 16.15
        },
    ]);




    process.exit();
})();