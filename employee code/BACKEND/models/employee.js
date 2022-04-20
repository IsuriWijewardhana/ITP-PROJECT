const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name:{
        type : String,
        required: true 
    },
    age:{
        type: Number,
        required: true
    },
    nic:{
        type: Number,
        required: true
    },
    telephone:{
        type: Number,
        required: true
    },
    emptype:{
        type: String,
        required: true
    }
})

const employee = mongoose.model("employee",employeeSchema);

module.exports = employee;