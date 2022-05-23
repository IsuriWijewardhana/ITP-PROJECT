const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const InventorySchema = new Schema({
    InventoryID: { type: Number, required: true },
    InventoryName: { type: String, required: true },
    Value: { type: Number, required: true },
    OnStock: { type: String, required: true },
    Quantity: { type: String, required: true },
    Location: { type: String, required: true },
    ItemDescription: { type: String, required: true },

}, {
    timestamps: true,
});

const Inventory  = mongoose.model('Inventory ', InventorySchema);

module.exports = Inventory ;







