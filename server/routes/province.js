'use strict';

const {
    mongoose
} = require('../db/mongoose');
mongoose.set('bufferCommands', false);

const {
    Province
} = require('../models/province');

const express = require('express');
const router = express.Router();


/***************************** Routes ******************************/

/**
 * GET route to get all provinces and their taxes
 * 
 * Request params:
 *      None
 * Request body:
 *      None
 * Response:
 *      - If successful:
 *          - Status: 200
 *          - Body: All provinces and their taxes (Type: Province[])
 *      - If unsuccessful:
 *          - Status: 500
 *          - Body: An error message (Type: string)
 */
router.get('/province/taxes', (req, res) => {
    // TODO - get from DB
    // placeholder
    res.send([
        new Province({
            name: 'Ontario',
            tax: 13
        }),
        new Province({
            name: 'Quebec',
            tax: 5
        }),
        new Province({
            name: 'Alberta',
            tax: 5
        })
    ])
});

module.exports = router;