const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Database Schema

const EmployeeSchema = new Schema({
    EmployeeID: { type: Number, required: true },
    EmployeeName: { type: String, required: true },
    Address: { type: String, required: true },
    Telephone: { type: String, required: true },
    Email: { type: String, required: true },
    Type: { type: String, required: true },
    Discription: { type: String, required: true },

}, {
    timestamps: true,
});

const Employee  = mongoose.model('Employee ', EmployeeSchema);

module.exports = Employee ;




