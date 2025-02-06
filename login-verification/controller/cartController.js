const CartModel = require("../model/cart");
const { StatusCodes } = require("http-status-codes");

//create
const createCart = async (req, res) => {
  try {
    const { user } = req.body;

    let exCart = await CartModel.findById(user.id);
    if (exCart)
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: "cart already exists " });

    let newCart = await CartModel(req.body);
    newCart.save();

    res
      .status(StatusCodes.ACCEPTED)
      .json({ msg: "product added to the cart " });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
//read all
const readAllCart = async (req, res) => {
  try {
    let data = await CartModel.find({});

    res.status(StatusCodes.OK).json({ length: carts.length, carts });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
//read single
const readSingleCart = async (req, res) => {
  try {
    let id = req.params.id;
    let cart = await CartModel.findById(id);
    if (!cart)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: err.message });

    res.status(StatusCodes.OK).json({ cart });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
//update
const updateCart = async (req, res) => {
  try {
    let id = req.params.id;
    let cart = await CartModel.findById(id);
    if (!cart)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: err.message });

    await CartModel.findByIdAndUpdate({ _id: id });

    res.status(StatusCodes.OK).json({ msg: " cart updated successfully" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
//delete
const deleteCart = async (req, res) => {
  try {
    let id = req.params.id;
    let cart = await CartModel.findById(id);
    if (!cart)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: err.message });

    await CartModel.findByIdAndDelete({ _id: id });

    res.status(StatusCodes.OK).json({ msg: " cart deleted successfully " });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

module.exports = {
  createCart,
  readAllCart,
  readSingleCart,
  updateCart,
  deleteCart,
};
