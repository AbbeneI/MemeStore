const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    image: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true }
}, {
    timestamps: true
});


module.exports = itemSchema;