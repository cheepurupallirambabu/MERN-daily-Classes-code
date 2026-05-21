const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { isUser } = require('../middleware/authAdmin');

const router = express.Router();
const { addToCart ,removeCartProducBasedOnId, getCart,removeCart} = require('../controller/CartController');

router.post('/addcart', verifyToken, isUser, addToCart);
router.get('/get-cart/:id', verifyToken, isUser, getCart);
router.delete('/remove-product/:id', verifyToken, isUser, removeCartProducBasedOnId);
router.patch('/remove-cart', verifyToken, isUser, removeCart);

module.exports = router;