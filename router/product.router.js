const express = require('express');
const productCotrollerCall = require('../controller/product.controller');

const router = express.Router();

router.get('/createProduct', productCotrollerCall.createProduct)
router.get('/retrieveProduct', productCotrollerCall.retrieveProduct)
router.post('/updateProduct', productCotrollerCall.updateProduct)
router.delete('/deleteProduct', productCotrollerCall.deleteProduct)

module.exports = router;