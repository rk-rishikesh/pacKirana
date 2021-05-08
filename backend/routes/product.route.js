let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Product Model
let productSchema = require('../models/Products');

// ADD Product
router.route('/addProduct').post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Product
router.route('/').get((req, res) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Product
router.route('/editProduct/:id').get((req, res) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Delete Product
router.route('/deleteProduct/:id').delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;