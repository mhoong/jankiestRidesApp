// dependencies
const db = require('../models');
const express = require('express');
const router = express.Router();


// new route
router.get('/new', (req, res) => {
    res.render('newCar')
});

// create route
router.post('/', (req, res) => {
    db.Car.create(req.body, (err, car) => {
        res.redirect('/car/' + car._id)
    })
});

// show route
router.get('/:id', (req, res) => {
    db.Car.findById(req.params.id, (err, car) => {
        res.render('showCar', {
            car: car,
        })
    })
});

// delete route
router.delete('/:id', (req, res) => {
    db.Car.findByIdAndRemove(req.params.id, (err, car) => {
        res.redirect('/')
    })
});

// edit route
router.get('/:id/edit', (req, res) => {
    db.Car.findById(req.params.id, (err, car) => {
        res.render('editCar', {
            car: car
        })
    })
});

// update route
router.put('/:id', (req, res) => {
    db.Car.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, car) => {
        res.redirect('/car/' + car._id)
    })
});


module.exports = router