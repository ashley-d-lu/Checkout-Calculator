// Temporary file for mock data until we have a DB

const {
    Province
} = require('../models/province');

// Src: https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate.html
const provinces = [
    new Province({
        name: 'Alberta',
        tax: 5
    }),
    new Province({
        name: 'British Columbia',
        tax: 5
    }),
    new Province({
        name: 'Manitoba',
        tax: 5
    }),
    new Province({
        name: 'Northwest Territories',
        tax: 5
    }),
    new Province({
        name: 'Nunavut',
        tax: 5
    }),
    new Province({
        name: 'Quebec',
        tax: 5
    }),
    new Province({
        name: 'Saskatchewan',
        tax: 5
    }),
    new Province({
        name: 'Yukon',
        tax: 5
    }),
    new Province({
        name: 'Ontario',
        tax: 13
    }),
    new Province({
        name: 'New Brunswick',
        tax: 13
    }),
    new Province({
        name: 'Newfoundland and Labrador',
        tax: 13
    }),
    new Province({
        name: 'Nova Scotia',
        tax: 13
    }),
    new Province({
        name: 'Prince Edward Island',
        tax: 13
    })
]

module.exports = {
    provinces
};