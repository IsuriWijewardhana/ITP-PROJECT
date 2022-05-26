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

router.route("/all").get((req,res)=>{

    Customer.find().then((customer)=>{
        res.json(customer)
    }).catch((err)=>{
        console.log(err)
    })

})


router.route("/update/:id").patch(async(req,res)=>{
    // let userId = req.params.id;
    // const {customer_code,first_name,last_name,email,phone,age,gender,address} = req.body;

    // const updateCustomer = {
    //     customer_code,
    //     first_name,
    //     last_name,
    //     email,
    //     phone,
    //     age,
    //     gender,
    //     address
    // }

    // const update = await Customer.findByIdAndUpdate(userId,updateCustomer)
    // .then(()=>{
    //      res.status(200).send({status:"User updated"})
    // }).catch((err)=>{
    //     console.log(err);
    //     res.status(500).send({status:"Error with updating data",error:err.message});
    // })

    const user = await Customer.findById(req.params.id);

  if (user) {
    user.customer_code = req.body.customer_code || user.customer_code;
    user.first_name = req.body.first_name || user.first_name;
    user.last_name = req.body.last_name || user.last_name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.age = req.body.age || user.age;
user.gender = req.body.gender || user.gender;
user.address = req.body.address || user.address;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
customer_code: updatedUser.customer_code,
      first_name: updatedUser.first_name,
      last_name: updatedUser.last_name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      age: updatedUser.age,
      gender: updatedUser.gender,
address: updatedUser.address
    });
  } else {
    res.status(404);
    throw new Error("Customer Not Found");
  }


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
    //  let userId = req.params.id;
    //  const user = await Customer.findById(userId).then(()=>{
    //     res.status(200).send({status:"User fetched"})
    //  }).catch(()=>{
    //      console.log(err.message);
    //      res.status(500).send({status:"Error with get user"});
    //  })

    const user = await Customer.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
})



module.exports = router;