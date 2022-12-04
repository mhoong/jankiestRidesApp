const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create review schema
const reviewSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    userReview: {
        type: String,
        required: true,
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;