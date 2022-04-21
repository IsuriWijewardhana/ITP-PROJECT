const router = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const { find } = require("../models/service");
let service = require("../models/service");

router.route("/add").post((req,res)=>{
   
    const serrviceID = Number(req.body.serrviceID);
    const serviceName = req.body.serviceName;
    const packageType = req.body.packageType;
    const price = number (req.body.price);
    const numberOfPeople = number(req.body.numberOfPeople);

    const newService = new service({

        serrviceID,
        serviceName,
        packageType,
        price,
        numberOfPeople
    })

    newService.save().then(()=>{
        res.json("service added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{

   service.find().then((service)=>{
    res.json(service) 
   }).catch((err)=>{
       console.log(err)
   })
   
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const{serrviceID,serviceName,packageType,price,numberOfPeople}= req.body;

    const updateService = { 
        serrviceID,
        serviceName,
        packageType,
        price,
        numberOfPeople
    }
    const update = await service.findByIdAndUpdate(userId,updateService)
    .then(()=> {
     res.status(200).send({status: "user updated ", user: update })
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
   })
})

router.route("/delete/:id").delete(async(req,res)=>{
  let userId = req.params.id;

  await service.findByIdAndDelete(userId) 
  .then(()=>{
      res.status(200).send({status: "user deleted "});
  }).catch((err)=> {
     console.log(err.message);
     res.status(500).send({status: "Error with delete user", error: err.message})

  })
})

router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;
    const user =await service.findById(userId)
    .then(()=>{
        res.status(200).send({status: "user fetched", user:user})
    }).catch(()=>{
        console.log(Err.message);
        res.status(500).send({status: "error with get user", error: err.message});
    })
})

module.exports = router;