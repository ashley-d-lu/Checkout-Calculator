'use strict';

const {
    mongoose
} = require('../db/mongoose');
mongoose.set('bufferCommands', false);

const {
    Item
} = require('../models/item');
const {
    Cart
} = require('../models/cart');

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
 * GET route to get the total price for the given cart
 * 
 * Request params:
 *      None
 * Request body:
 *      Type: Omit<Cart, “totalPrice”>
 * Response:
 *      - If successful:
 *          - Status: 200
 *          - Body: The total price (Type: number)
 *      - If unsuccessful:
 *          - Status: 500
 *          - Body: An error message (Type: string)
 */
router.get('/cart/totalPrice', (req, res) => {
    // TODO
    const totalPrice = 0
    res.send(totalPrice.toString())
});


/**
 * PUT route to save the given cart
 * 
 * Request params:
 *      None
 * Request body:
 *      Type: Omit<Cart, “totalPrice”>
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