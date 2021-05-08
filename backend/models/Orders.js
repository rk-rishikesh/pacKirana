const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
  orderId: {
    type: String
  },
  customerName: {
    type: String
  },
  state:{
    type: Boolean
  }
}, {
    collection: 'orders'
  })

module.exports = mongoose.model('Order', orderSchema)