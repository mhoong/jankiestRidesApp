// dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create car schema
const carSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    mi: {
        type: Number,
        required: true,
    },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;