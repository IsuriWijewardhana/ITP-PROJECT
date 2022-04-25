const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customer_code:{
        type:String,
        required:true,
        //unique:true,
    },

    first_name:{
        type : String,
        required:true
    },

    last_name:{
        type : String,
        required:true
    },

    email:{
        type : String,
        required:true
    },
   phone:{
       type : Number,
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

//const Customer = mongoose.model("customer",customerSchema);

//module.exports = customer;

module.exports = mongoose.model("Customer",customerSchema);

