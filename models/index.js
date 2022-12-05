// dpendencies
const mongoose = require("mongoose");


// mongodb connection
const connectionString = process.env.MONGODBURI
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);


// access models
module.exports.Car = require('./car.js');
module.exports.Review = require('./review');