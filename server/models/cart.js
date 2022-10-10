const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    ItemSchema
} = require('../models/item');
const {
    Receipt,
    ReceiptSchema
} = require('../models/receipt');

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
    receipt: {
        type: ReceiptSchema,
        default: new Receipt()
    }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = {
    Cart,
    CartSchema
};