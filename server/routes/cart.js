'use strict';
const ObjectId = require('mongodb').ObjectId;

// DB connection
const {
    mongoose
} = require('../db/mongoose');
mongoose.set('bufferCommands', false);

// Models
const {
    Cart
} = require('../models/cart');
const {
    Province
} = require('../models/province');

// Helpers
const {
    getReceipt
} = require('../utils/common')

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
router.get('/cart', async (req, res) => {
    const cart = await Cart.findOne({})

    cart.receipt = getReceipt(cart, await Province.find({}))

    res.send(cart)
});


/**
 * GET route to get the receipt for the given cart
 * 
 * Request params:
 *      None
 * Request body:
 *      Type: Omit<Cart, "_id" | "receipt">
 * Response:
 *      - If successful:
 *          - Status: 200
 *          - Body: The receipt (Type: Receipt)
 *      - If unsuccessful:
 *          - Status: 500
 *          - Body: An error message (Type: string)
 */
router.get('/cart/receipt', async (req, res) => {
    res.send(getReceipt(req.body, await Province.find({})))
});


/**
 * PUT route to save the given cart
 * 
 * Request params:
 *      None
 * Request body:
 *      Type: Omit<Cart, "receipt">
 * Response:
 *      - If successful:
 *          - Status: 200
 *          - Body: None
 *      - If unsuccessful:
 *          - Status: 500
 *          - Body: An error message (Type: string)
 */
router.put('/cart', (req, res) => {
    Cart.updateOne({
        _id: ObjectId(req.body._id)
    }, {
        $set: {
            items: req.body.items,
            discountPercentage: req.body.discountPercentage,
            provinceName: req.body.provinceName
        }
    }, (err) => {
        if (!err) {
            res.status(200).send()
        } else {
            res.status(500).send("Internal Server Error");
        }
    })
});

module.exports = router;