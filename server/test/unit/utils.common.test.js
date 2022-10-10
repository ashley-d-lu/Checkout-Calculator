'use strict';

// Models
const {
    Cart
} = require('../../models/cart');

// Utils
const {
    roundDollarAmt,
    getReceipt
} = require('../../utils/common')

// Constants
const provinces = require('../../resources/db-setup/provinces.json')


/***************************** Tests ******************************/


describe('roundDollarAmt', () => {
    test('whole numbers', () => {
        expect(roundDollarAmt(0)).toBe(0);
        expect(roundDollarAmt(6)).toBe(6);
        expect(roundDollarAmt(-5)).toBe(-5);
        expect(roundDollarAmt(128)).toBe(128);
    });

    test('2 or less decimal digits', () => {
        expect(roundDollarAmt(6.3)).toBe(6.3);
        expect(roundDollarAmt(6.35)).toBe(6.35);
    });

    test('more than 2 decimal digits', () => {
        expect(roundDollarAmt(6.304)).toBe(6.3);
        expect(roundDollarAmt(6.306)).toBe(6.31);
        expect(roundDollarAmt(6.3069)).toBe(6.31);
    });
})


describe('getReceipt', () => {
    test('cart with 0 items', () => {
        const cart = new Cart({
            items: [],
            discountPercentage: 10,
            provinceName: 'Quebec'
        })

        const receipt = getReceipt(cart, provinces)

        expect(receipt.subtotal).toBe(0);
        expect(receipt.savings).toBe(0);
        expect(receipt.taxDollarAmt).toBe(0);
        expect(receipt.total).toBe(0);
    });

    test('cart with 1 item', () => {
        const cart = new Cart({
            items: [{
                name: 'a',
                price: 10,
                quantity: 1
            }],
            discountPercentage: 10,
            provinceName: 'Quebec'
        })

        const receipt = getReceipt(cart, provinces)

        const taxPercentage = provinces.find(province => province.name === cart.provinceName).tax
        const expectedTaxDollarAmt = roundDollarAmt((10 - 1) * (taxPercentage / 100))

        expect(receipt.subtotal).toBe(10);
        expect(receipt.savings).toBe(1);
        expect(receipt.taxDollarAmt).toBe(expectedTaxDollarAmt);
        expect(receipt.total).toBe(9.45);
    });

    test('cart with 2 items, different discount, and different province tax', () => {
        const cart = new Cart({
            items: [{
                    name: 'a',
                    price: 10,
                    quantity: 1
                },
                {
                    name: 'b',
                    price: 5,
                    quantity: 3
                }
            ],
            discountPercentage: 15,
            provinceName: 'Ontario'
        })

        const receipt = getReceipt(cart, provinces)

        const taxPercentage = provinces.find(province => province.name === cart.provinceName).tax
        const expectedTaxDollarAmt = roundDollarAmt((25 - 3.75) * (taxPercentage / 100))

        expect(receipt.subtotal).toBe(25);
        expect(receipt.savings).toBe(3.75);
        expect(receipt.taxDollarAmt).toBe(expectedTaxDollarAmt);
        expect(receipt.total).toBe(24.01);
    });
})