const CartProduct = require('../model/CartModel');

const addToCart = async (req, res) => {
    try {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      res.status(401).json({ message: "missing required fields" });
    }

    if (await CartProduct.findOne({ userId: userId }) == null) {
      await CartProduct.insertOne({ userId: userId, productIds: [productId] });
    } else {
      await CartProduct.updateOne(
        { userId: userId },
        { $push: { productIds: productId } },
      );
    }
    res.status(200).json({ message: "add to cart successful" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add cart ", error });
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const cart = await CartProduct.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    return res.status(200).json(cart.productIds);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const removeCartProducBasedOnId = async (req,res)=> {
 try {
  const userId = req.user.id;
  const productId = req.params.id;
  const updatedCart = await CartProduct.findOneAndUpdate(
    { userId },
    { $pull: { productIds: productId } },
    { new: true }
  );
  return res.status(200).json(updatedCart.productIds);
 } catch (error) {
  return res.status(500).json({ message: error.message });
 }
}

const removeCart = async (req, res) => {
  try {
    const cart =  await CartProduct.findByIdAndUpdateOne({ userId: ObjectId({userId}) }, 
    { $set: { productIds: [] } }, { new: true });
    return res.status(200).json({ message: 'Cart removed successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message , cart});
  }
};
module.exports = { addToCart, getCart, removeCartProducBasedOnId, removeCart };