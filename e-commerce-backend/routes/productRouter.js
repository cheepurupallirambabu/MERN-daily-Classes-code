const { addProducts, getProducts ,deleteProduct ,updateProduct,filteredProductsBasedOnPrice,sortProductsByPrice} = require('../controller/productController');
const verifytoken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/authAdmin');
const express = require('express');

const router = express.Router();

router.post('/add-products', verifytoken, isAdmin, addProducts);
router.get('/get-products', getProducts);
router.delete('/delete-product/:id', verifytoken, isAdmin, deleteProduct);
router.patch('/update-product/:id', verifytoken, isAdmin, updateProduct);
router.get('/filtered-products', filteredProductsBasedOnPrice);
router.get('/sorted-products', sortProductsByPrice);
module.exports = router;