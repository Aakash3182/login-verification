const cartRoute = require("express").Router();
const {
  createCart,
  readAllCart,
  readSingleCart,
  updateCart,
  deleteCart,
} = require("../controller/cartController");

cartRoute.post(`/`, createCart);
cartRoute.get(`/`, readAllCart);
cartRoute.get(`/:id`, readSingleCart);
cartRoute.patch(`/:id`, updateCart);
cartRoute.delete(`/:id`, deleteCart);

module.exports = cartRoute;
