/**
 * This module contains common functions, helpers, and middleware
 */

'use strict';

// Rounds the given dollar amount
const roundDollarAmt = (num) => Math.round((num + Number.EPSILON) * 100) / 100

// Generic function to get all documents in <MongooseModel> that match <filter>.
// If <filter> is not specified, this function gets all documents in <MongooseModel>.
const find = (req, res, MongooseModel, filter) => {
    if (!filter) {
        filter = {};
    }
    MongooseModel.find(filter)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            log(error);
            res.status(500).send("Internal server error");
        });
}

module.exports = {
    roundDollarAmt,
    find
};