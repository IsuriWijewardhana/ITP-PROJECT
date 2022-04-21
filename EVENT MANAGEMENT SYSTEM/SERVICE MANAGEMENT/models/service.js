const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const schema = mongoose.Schema;

const serviceschema = new schema ({
    serrviceID: {
        type: Number,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    packageType: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    numberOfPeople: {
        type: Number,
        required: true
    }

})

const service = mongoose.model("service",serviceschema );

module.exports = service;