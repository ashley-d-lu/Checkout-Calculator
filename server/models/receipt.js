const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
    subtotal: {
        type: Number,
        required: true
    },
    savings: {
        type: Number,
        required: true
    },
    taxDollarAmt: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

const Receipt = mongoose.model('Receipt', ReceiptSchema);

module.exports = {
    Receipt,
    ReceiptSchema
};