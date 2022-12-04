// dependencies
const express = require ('express');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const db = require('./models');
const carsCtrl = require('./controllers/cars');
// const reviewsCtrl = require('./controllers/reviews');


// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));


// routes
app.get('/', (req, res) => {
    db.Car.find({}, (err, cars) => {
        res.render('index', {
            cars: cars
        })
    })
});


app.use('/car', carsCtrl)


// listener
app.listen(port, () => {
    console.log(`Running on localhost:${port}`)
});