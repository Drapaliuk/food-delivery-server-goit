const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  creator: String,
  productsList: Array,
  deliveryType: String,
  deliveryAddress: String,
  sumToPay: Number,
  status: String,
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;