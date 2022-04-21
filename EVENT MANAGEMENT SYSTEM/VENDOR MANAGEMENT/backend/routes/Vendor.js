const router = require('express').Router();
let Vendor  = require('../models/Vendor.model');

router.route('/').get((req, res) => {
    Vendor.find()
        .then(Vendor => res.json(Vendor))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const VendorID = req.body.VendorID;
    const CompanyName = req.body.CompanyName;
    const Address =req.body.Address;
    const Email = req.body.Email;
    const PostalCode = req.body.PostalCode;
    const Description = req.body.Description;
    const Materials = req.body.Materials;
   


    const newVendor  = new Vendor({
        VendorID,
        CompanyName,
        Address,
        Email,
        PostalCode,
        Description,
        Materials
       
    });



    newVendor.save()
        .then(() => res.json('Vendor  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Vendor.findById(req.params.id)
        .then(Vendor => res.json(Vendor))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Vendor.findByIdAndDelete(req.params.id)
        .then(() => res.json('Vendor deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Vendor.findById(req.params.id)
        .then(Vendor => {
            Vendor.VendorID = req.body.VendorID;
            Vendor.CompanyName = req.body.CompanyName;
            Vendor.Address = req.body.Address;
            Vendor.PostalCode = req.body.PostalCode;
            Vendor.Email = req.body.Email;
            Vendor.Description = req.body.Description;
            Vendor.Materials = req.body.Materials;
            
          


            Vendor.save()
                .then(() => res.json('Vendor updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;