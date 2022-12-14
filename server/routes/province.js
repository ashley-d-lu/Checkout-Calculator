'use strict';

// DB connection
const {
    mongoose
} = require('../db/mongoose');
mongoose.set('bufferCommands', false);

// Models
const {
    Province
} = require('../models/province');


// Router
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
router.get('/province/taxes', async (req, res) => {
    res.send(await Province.find({}));
});

module.exports = router;