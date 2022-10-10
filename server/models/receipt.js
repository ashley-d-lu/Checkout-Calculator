const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
    subtotal: {
        type: Number,
        default: 0
    },
    savings: {
        type: Number,
        default: 0
    },
    taxDollarAmt: {
        type: Number,
        default: 0
    },
    receipt: {
        type: Number,
        default: 0
    }
});

const Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = {
    Receipt,
    ReceiptSchema
};