const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    paymentID : {
        type : String,
        required: true
    },

    customerID : {
       type : String,
       required: true
   },

    firstName : {
       type : String,
       required: true
    },

    lastName : {
       type : String,
       required: true
   },

   paymentMode : {
       type : String,
       required: true
   },

   package : {
       type : String,
       required: true
   },

   totalAmount : {
       type : Number,
       required: true
   },

   paymentStatus : {
       type : String,
       required: true
   }

});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;