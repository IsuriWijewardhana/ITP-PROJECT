const router = require("express").Router();
let Customer = require("../models/Customer");


router.route("/add").post((req,res) =>{
    const customer_code=req.body.customer_code;
    const first_name=req.body. first_name;
    const last_name=req.body. last_name;
    const email=req.body. email;
    const phone=Number(req.body. phone);
    const age=Number(req.body. age);
    const gender=req.body.gender;
    const address=req.body.address;

    const newCustomer = new Customer({

        customer_code,
        first_name,
        last_name,
        email,
        phone,
        age,
        gender,
        address

    })


    newCustomer.save().then(()=>{
        res.json("Customer Added ")
    }).catch(()=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

    Customer.find().then((customer)=>{
        res.json(customer)
    }).catch((err)=>{
        console.log(err)
    })

})


router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {customer_code,first_name,last_name,email,phone,age,gender,address} = req.body;

    const updateCustomer = {
        customer_code,
        first_name,
        last_name,
        email,
        phone,
        age,
        gender,
        address
    }

    const update = await Customer.findByIdAndUpdate(userId,updateCustomer)
    .then(()=>{
         res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })


})


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;

    await Customer.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Customer.findById(userId).then(()=>{
        res.status(200).send({satus:"User fetched",user: user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error :err.message});
    })
})

module.exports = router;