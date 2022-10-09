const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tax: {
        type: Number,
        required: true
    }
});

const Province = mongoose.model('Province', ProvinceSchema);

module.exports = {
    Province,
    ProvinceSchema
};