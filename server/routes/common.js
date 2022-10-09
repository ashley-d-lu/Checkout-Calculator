/**
 * This module contains common functions, helpers, and middleware
 */

'use strict';

const roundDollarAmt = (num) => Math.round((num + Number.EPSILON) * 100) / 100

module.exports = {
    roundDollarAmt
};