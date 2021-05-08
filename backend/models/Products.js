const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  shopName: {
    type: String
  },
  productName: {
    type: String
  },
  cost: {
    type: String
  }
}, {
    collection: 'products'
  })

module.exports = mongoose.model('Product', productSchema)