const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customer_code:{
        type:String,
        required:true,
        unique:true,
    },

    name:{
        type : String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    }
   

})

//const Customer = mongoose.model("Customer",customerSchema);

module.exports = mongoose.model("Customer",customerSchema);

