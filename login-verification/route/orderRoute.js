const orderRoute = require("express").Router();
const {
  createOrder,
  readSingleOrder,
  readAllOrder,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");

orderRoute.post("/", createOrder);
orderRoute.get("/", readAllOrder);
orderRoute.get("/:id", readSingleOrder);
orderRoute.patch("/:id", updateOrder);
orderRoute.delete("/:id", deleteOrder);

module.exports = orderRoute;
