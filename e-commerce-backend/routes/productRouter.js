const { addProducts, getProducts ,deleteProduct ,updateProduct,filteredProductsBasedOnPrice,sortProductsByPrice} = require('../controller/productController');
const verifyToken = require('../middleware/verifyToken');
const { isAdmin } = require('../middleware/authAdmin');
const express = require('express');

const router = express.Router();

router.post('/add-products', verifyToken, isAdmin, addProducts);
router.get('/get-products', getProducts);
router.delete('/delete-product/:id', verifyToken, isAdmin, deleteProduct);
router.patch('/update-product/:id', verifyToken, isAdmin, updateProduct);
router.get('/filtered-products', filteredProductsBasedOnPrice);
router.get('/sorted-products', sortProductsByPrice);
module.exports = router;