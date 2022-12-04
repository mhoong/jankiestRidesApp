const db = require('../models');
const express = require('express');
const router = express.Router();


// new route
router.get('/new', (req, res) => {
    res.render('newReview')
});

// create route
router.post('/', (req, res) => {
    db.Review.create(req.body, (err, review) => {
        res.redirect('/review/' + review._id)
    })
});

// show route
router.get('/:id', (req, res) => {
    db.Review.findById(req.params.id, (err, review) => {
        res.render('showReview', {
            review: review,
        })
    })
});

// delete route
router.delete('/:id', (req, res) => {
    db.Review.findByIdAndRemove(req.params.id, (err, review) => {
        res.redirect('/')
    })
});

// edit route
router.get('/:id/edit', (req, res) => {
    db.Review.findById(req.params.id, (err, review) => {
        res.render('editReview', {
            review: review
        })
    })
});

// update route
router.put('/:id', (req, res) => {
    db.Review.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, review) => {
        res.redirect('/review/' + review._id)
    })
});


module.exports = router