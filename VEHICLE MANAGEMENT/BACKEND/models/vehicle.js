const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicletSchema = new Schema({
    model : {
        type : String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required:true
    },
    colour:{
        type: String,
        required: true
    }
    
})

const Vehicle = mongoose.model("Vehicle", vehicletSchema);
module.exports = Vehicle;