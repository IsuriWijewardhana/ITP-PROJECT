const router = require('express').Router();
let Inventory  = require('../models/Inventory.model');

router.route('/').get((req, res) => {
    Inventory.find()
        .then(Inventory => res.json(Inventory))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add Function

router.route('/add').post((req, res) => {

    const InventoryID = req.body.InventoryID;
    const InventoryName = req.body.InventoryName;
    const Value =req.body.Value;
    const Quantity = req.body.Quantity;
    const OnStock = req.body.OnStock;
    const Location = req.body.Location;
    const ItemDescription = req.body.ItemDescription;
   

    const newInventory  = new Inventory({
        InventoryID,
        InventoryName,
        Value,
        Quantity,
        OnStock,
        Location,
        ItemDescription
       
    });

    newInventory.save()
        .then(() => res.json('Inventory  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get Data 
router.route('/:id').get((req, res) => {
    Inventory.findById(req.params.id)
        .then(Inventory => res.json(Inventory))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Inventory.findByIdAndDelete(req.params.id)
        .then(() => res.json('Inventory deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update data
router.route('/update/:id').post((req, res) => {
    Inventory.findById(req.params.id)
        .then(Inventory => {
            Inventory.InventoryID = req.body.InventoryID;
            Inventory.InventoryName = req.body.InventoryName;
            Inventory.Value = req.body.Value;
            Inventory.OnStock = req.body.OnStock;
            Inventory.Quantity = req.body.Quantity;
            Inventory.Location = req.body.Location;
            Inventory.ItemDescription = req.body.ItemDescription;
            
          

            Inventory.save()
                .then(() => res.json('Inventory updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;







