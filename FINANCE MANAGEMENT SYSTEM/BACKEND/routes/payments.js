const router = require("express").Router();
let Payment = require("../models/Payment");

router.route("/add").post((req, res) => {

    const paymentID = req.body.paymentID;
    const customerID = req.body.customerID;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const paymentMode = req.body.paymentMode;
    const package = req.body.package;
    const totalAmount = Number(req.body.totalAmount);
    const paymentStatus = req.body.paymentStatus;

    const newPayment = new Payment({

        paymentID,
        customerID,
        firstName,
        lastName,
        paymentMode,
        package,
        totalAmount,
        paymentStatus

    })


    newPayment.save().then(() =>{
        res.json("Payment Added")
    }).catch((err) =>{
        console.log(err)
    })
})


router.route("/").get((req, res) =>{

    Payment.find().then((payments) =>{
        res.json(payments)
    }).catch((err) =>{
        console.log(err)
    })
})


router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {paymentID, customerID, firstName, lastName, paymentMode, package, totalAmount, paymentStatus} = req.body;

    const updatePayment = {
        paymentID,
        customerID,
        firstName,
        lastName,
        paymentMode,
        package,
        totalAmount,
        paymentStatus
    }

    const update = await Payment.findByIdAndUpdate(userId, updatePayment).then(() =>{
        res.status(200).send({status: "User updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })    
})


router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await Payment.findByIdAndDelete(userId)
       .then(() => {
           res.status(200).send({status: "User deleted"});
       }).catch((err) => {
           console.log(err.message);
           res.status(500).send({status: "Error with delete user", error: err.message});
       })
})


router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    await Payment.findById(userId)
    .then((payment) => {
        res.status(200).send({status: "User fetched", payment})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})


module.exports = router;
