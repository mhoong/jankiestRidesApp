// dpendencies
const mongoose = require("mongoose");


// mongodb connection
const connectionString = 'mongodb://localhost/jankiestRides'
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);


// connection status
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('diconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});


// access models
module.exports.Car = require('./car.js');
module.exports.Review = require('./review');