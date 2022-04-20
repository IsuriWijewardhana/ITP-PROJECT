const router = require("express").Router();

let Event = require("../models/event");

//line no 51 in server.js
http://localhost:8070/event/add

//create
router.route("/add").post((req,res) =>{
    
    //insert data from event.js models
    const eventName = req.body.eventName;
    const eventType = req.body.eventType;
    const eventVeneue = req.body.eventVeneue;
    //data type of noOfavailablePackages is a number
    const noOfavailablePackages = Number(req.body.noOfavailablePackages);

    //cons variable 
    const newEvent = new Event({
        eventName,
        eventType,
        eventVeneue,
        noOfavailablePackages
    })
    
    //js promise like if else
    newEvent.save().then(() =>{
        res.json("Event Added")
    }).catch((err) => {
        console.log(err);
    })
})

    //read

http://localhost:8070/event/
router.route("/").get((req,res) =>{
    Event.find().then((events) => {
        res.json(events)
    }).catch((err) => {
        console.log(err);
    })
})

    //update
    http://localhost:8070/event/update/abc123
    //with async function 
    //wait for the next function async
    router.route("/update/:id").put(async (req, res) => {
        let eventID = req.params.id;
        //destructure 
        const {eventName, eventType, eventVeneue, noOfavailablePackages} = req.body;

        const updateEvent = {
            eventName,
            eventType,
            eventVeneue,
            noOfavailablePackages
        }
        const update = await Event.findByIdAndUpdate(eventID, updateEvent).then(() => {
                 //update success request
                res.status(200).send({status: "Event Updated"})
        }).catch((err) => {
            console.log(err);
            //send for the front end server err 500
            res.status(500).send({status: "error with updating data"});
    })
})

    //delete
    router.route("/delete/:id").delete(async (req, res) => {
        let eventID = req.params.id;     //delete we don't need name, etc. its only id

        await Event.findByIdAndDelete(eventID).then(() => {
            res.status(200).send({status : "Event deleted"});
        }) .catch((err) => {
                console.log(err.message);
                //send for the front end server err 500
                res.status(500).send({status: "error with delete event", error : err.message});
        })
    })

    //get only one data
    router.route("/get/:id").get(async (req, res) => {
        let eventID = req.params.id;
      const event = await Event.findById(eventID).then(() =>{
            res.status(200).send({status: "Event fetched", event: event})
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({status: "Error with get Event", error:err.message});
        }) 
    })
//export the module
module.exports = router;

