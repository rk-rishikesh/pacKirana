let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Order Model
let orderSchema = require('../models/Orders');

// ADD Order
router.route('/addOrder').post((req, res, next) => {
    orderSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Orders
router.route('/').get((req, res) => {
    orderSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Order
router.route('/editOrder/:id').get((req, res) => {
    orderSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Order
router.route('/updateOrder/:id').put((req, res, next) => {
    orderSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Order updated successfully !')
    }
  })
})

module.exports = router;