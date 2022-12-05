// dependencies
const express = require ('express');
const app = express();
const methodOverride = require('method-override');
require('dotenv').config();
const db = require('./models');
const carsCtrl = require('./controllers/cars');
const reviewsCtrl = require('./controllers/reviews');
const port = process.env.PORT


// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));


// routes
app.get('/', (req, res) => {
    db.Car.find({}, (err, cars) => {
        db.Review.find({}, (err, reviews) => {
            res.render('index', {
                cars: cars,
                reviews: reviews
            })
        })
    })
});


app.use('/car', carsCtrl);
app.use('/review', reviewsCtrl);


// listener
app.listen(port, () => {
    console.log(`Running on localhost:${port}`)
});