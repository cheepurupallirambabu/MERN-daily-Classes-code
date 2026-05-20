const products = require('../model/ProductModel');

const addProducts = async (req, res) => {
    try {
        const newProduct = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            ratings: req.body.ratings,
            imageSrc: req.body.imageSrc,
            about: req.body.about,
            reviews: req.body.reviews ,
        };
        await products.create(newProduct);
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const allProducts = await products.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await products.findByIdAndDelete(id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await products.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const filteredProductsBasedOnPrice = async (req, res) => {
  try {
    const { lowPrice, highPrice } = req.query;
    const filteredProducts = await products.find({
      price: {
        $gte: { $numberDecimal: lowPrice },
        $lte: { $numberDecimal: highPrice }
      }
    });
    res.status(200).json(filteredProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const sortProductsByPrice = async (req, res) => {
    try {
        const { sortBy } = req.query;
        const sortedProducts = await products.find().sort({ price: sortBy === 'asc' ? 1 : -1 });
        res.status(200).json(sortedProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {addProducts, getProducts, deleteProduct, updateProduct, filteredProductsBasedOnPrice, sortProductsByPrice}