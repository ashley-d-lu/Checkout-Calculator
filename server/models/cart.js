const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    ItemSchema
} = require('../models/item');

const CartSchema = new Schema({
    items: {
        type: [ItemSchema],
        default: []
    },
    discountPercentage: {
        type: Number,
        default: 0
    },
    provinceName: {
        type: String,
        default: 'Ontario'
    },
    totalPrice: {
        type: Number,
        default: 0
    }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = {
    Cart,
    CartSchema
};