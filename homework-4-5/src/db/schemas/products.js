const mongoose = require('mongoose');
const { Schema } = mongoose;
// const timestamp = require('../middleware/timestamp');


const productsSchema = new Schema({
    sku: Number,
    name: String,
    description: String,
    price: String,
    currency: String,
    creatorId: Number,
    created: String,
    modified: String,
    categories: Array,
    likes: Number,
});

// productsSchema.plugin(timestamp);

const product = mongoose.model('Products', productsSchema);



module.exports = product