const router = require("express").Router();
let employee = require("../models/employee");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const age = Number(req.body.age);
    const nic= Number(req.body.nic);
    const telephone = Number(req.body.telephone);
    const emptype = req.body.emptype;

    const newemployee = new employee({

        name,
        age,
        nic,
        telephone,
        emptype
    })

    newemployee.save().then(()=>{
        res.json("ëmployee added")
    }).catch((err)=>{
        console.log(err);
    })

   
})


router.route("/").get((req,res)=>{
    employee.find().then((employee)=>{
        res.json(employee)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    const {name,age,nic,telephone,emptype} = req.body;

    const updateemployee = {
        name,
        age,
        nic,
        telephone,
        emptype
    }

    const update = await employee.findByIdAndUpdate(userId, updateemployee).then(()=>{
        res.status(200).send({status:"User Update"})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await employee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Deleted"});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;
    await employee.findById(userId).then((employee)=>{
        res.status(200).send({status: "User fetched", employee})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Erroe with get user", error:err.message})
    })
})


module.exports=router;
