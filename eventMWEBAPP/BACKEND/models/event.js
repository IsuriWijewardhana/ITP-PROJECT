const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName : {
        type : String,
        required: true
    },
    eventType : {
        type : String,
        required: true
    },
    eventVeneue : {
        type : String,
        required: true
    },
    noOfavailablePackages : {
        type : Number,
        required: true
    },
})

const Event = mongoose.model("Event",eventSchema);
module.exports= Event;