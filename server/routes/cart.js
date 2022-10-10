'use strict';

// DB connection
const {
    mongoose
} = require('../db/mongoose');
mongoose.set('bufferCommands', false);

// Models
const {
    Item
} = require('../models/item');
const {
    Cart
} = require('../models/cart');
const {
    Receipt
} = require('../models/receipt');

// Mock data - TODO remove
const {
    provinces
} = require('./mockData')

// Helpers
const {
    roundDollarAmt
} = require('./common')

// Router
const express = require('express');
const router = express.Router();


/***************************** Routes ******************************/

/**
 * GET route to get the saved cart
 * 
 * Request params:
 *      None
 * Request body:
 *      None
 * Response:
 *      - If successful:
 *          - Status: 200
 *          - Body: The saved cart (Type: Cart)
 *      - If unsuccessful:
 *          - Status: 500
 *          - Body: An error message (Type: string)
 */
router.get('/cart', (req, res) => {
    // TODO
    res.send(new Cart())
});


/**
 * GET route to get the receipt for the given cart
 * 
 * Request params:
 *      None
 * Request body:
 *      Type: Omit<Cart, “receipt”>
 * Response:
 *      - If successful:
 *          - Status: 200
 *          - Body: The receipt (Type: Receipt)
 *      - If unsuccessful:
 *          - Status: 500
 *          - Body: An error message (Type: string)
 */
router.get('/cart/receipt', (req, res) => {
    // Calculate subtotal
    let subtotal = req.body.items.reduce((subtotal, item) => {
        return subtotal + (item.price * item.quantity)
    }, 0)

    // Calculate savings
    const savings = subtotal * (req.body.discountPercentage / 100)

    // Calculate tax
    const taxPercentage = provinces.find(province => province.name === req.body.provinceName).tax
    const taxDollarAmt = (subtotal - savings) * (taxPercentage / 100)

    // Calculate total
    const total = subtotal - savings + taxDollarAmt

    // Send receipt
    res.send(new Receipt({
        subtotal: roundDollarAmt(subtotal),
        savings: roundDollarAmt(savings),
        taxDollarAmt: roundDollarAmt(taxDollarAmt),
        total: roundDollarAmt(total)
    }))
});


/**
 * PUT route to save the given cart
 * 
 * Request params:
 *      None
 * Request body:
 *      Type: Omit<Cart, “receipt”>
 * Response:
 *      - If successful:
 *          - Status: 200
 *          - Body: None
 *      - If unsuccessful:
 *          - Status: 500
 *          - Body: An error message (Type: string)
 */
router.put('/cart', (req, res) => {
    // TODO
    res.status(200).send()
});

module.exports = router;