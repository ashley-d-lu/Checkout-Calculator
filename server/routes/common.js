/**
 * This module contains common functions, helpers, and middleware
 */

'use strict';
const {
    Receipt
} = require('../models/receipt');


/**
 * Gets a rounded version of the given dollar amount
 */
const roundDollarAmt = (num) => Math.round((num + Number.EPSILON) * 100) / 100


/**
 * Gets the receipt for the given params
 */
const getReceipt = (items, discountPercentage, provinceName, provinces) => {
    // Calculate subtotal
    let subtotal = items.reduce((subtotal, item) => {
        return subtotal + (item.price * item.quantity)
    }, 0)

    // Calculate savings
    const savings = subtotal * (discountPercentage / 100)

    // Calculate tax
    const taxPercentage = provinces.find(province => province.name === provinceName).tax
    const taxDollarAmt = (subtotal - savings) * (taxPercentage / 100)

    // Calculate total
    const total = subtotal - savings + taxDollarAmt

    // Send receipt
    return new Receipt({
        subtotal: roundDollarAmt(subtotal),
        savings: roundDollarAmt(savings),
        taxDollarAmt: roundDollarAmt(taxDollarAmt),
        total: roundDollarAmt(total)
    })
}


module.exports = {
    roundDollarAmt,
    getReceipt
};