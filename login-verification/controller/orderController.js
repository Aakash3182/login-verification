const OrderModel = require("../model/order");
const { StatusCodes } = require("http-status-codes");

//create
const createOrder = async (req, res) => {
  try {
    let newOrder = await OrderModel(req.body);
    newOrder.save();
    return res.status(StatusCodes.CREATED).json({ msg: "new order created " });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
//readall
const readAllOrder = async (req, res) => {
  try {
    let orders = await OrderModel.find({});

    return res
      .status(StatusCodes.ACCEPTED)
      .json({ length: orders.length, orders });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
//read single order
const readSingleOrder = async (req, res) => {
  try {
    let id = req.params.id;
    let order = await OrderModel.findById(id);
    if (!order)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: err.message });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
//update
const updateOrder = async (req, res) => {
  try {
    let id = req.params.id;
    let order = await OrderModel.findById(id);
    if (!order)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "order not found " });
    await OrderModel.findByIdAndUpdate(id);

    return res
      .status(StatusCodes.OK)
      .json({ msg: " order updated successfully" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
//delete
const deleteOrder = async (req, res) => {
  try {
    let id = req.params.id;
    let order = await OrderModel.findById(id);
    if (!order)
      return res.status(StatusCodes.NOT_FOUND).json({ msg: "order not found" });
    await OrderModel.findByIdAndDelete(id);

    return res
      .status(StatusCodes.OK)
      .json({ msg: " order deleted successfully" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

module.exports = {
  createOrder,
  readSingleOrder,
  readAllOrder,
  updateOrder,
  deleteOrder,
};
