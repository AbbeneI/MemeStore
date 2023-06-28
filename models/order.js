const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const cartItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    item: itemSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cartItems: [cartItemSchema],
    isPaid: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function () {
    return this.cartItems.reduce((total, item) => total + item.cartItemPrice, 0);
});

orderSchema.virtual('orderQty').get(function () {
    return this.cartItems.reduce((total, item) => total + item.qty, 0);
});

cartItemSchema.virtual('cartItemPrice').get(function () {
    // 'this' keyword is bound to the cartItem document
    return this.qty * this.item.price;
});

orderSchema.statics.getCart = function (userId) {
    return this.findOneAndUpdate(
        // query object
        { user: userId, isPaid: false },
        // update doc - provides values when inserting
        { user: userId },
        // upsert option
        { upsert: true, new: true }
    );
};

// Adding an item to a cart (unpaid order)
orderSchema.methods.addItemToCart = async function (itemId) {
    const cart = this;
    // Check if the item already exists in the cart
    const cartItem = cart.cartItems.find(cartItem => cartItem.item._id.equals(itemId));
    if (cartItem) {
        // It already exists, so increase the qty
        cartItem.qty += 1;
    } else {
        // Get the item from the "catalog"
        const Item = mongoose.model('Item');
        const item = await Item.findById(itemId);
        cart.cartItems.push({ item });
    }
    return cart.save();
};

// Set an item's qty in the cart
orderSchema.methods.setItemQty = function (itemId, newQty) {
    const cart = this;
    const cartItem = cart.cartItems.find(cartItem => cartItem.item._id.equals(itemId));
    if (cartItem && newQty <= 0) {
        // Call deleteOne, removes the cartItem subdoc from the cart.cartItems array
        cartItem.deleteOne();
    } else if (cartItem) {
        // Set the new qty
        cartItem.qty = newQty;
    }
    return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);