// dpendencies
const mongoose = require("mongoose");


// mongodb connection
const connectionString = process.env.MONGODBURI
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

// access models
module.exports.Car = require('./car.js');
module.exports.Review = require('./review');