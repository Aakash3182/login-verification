const ProductRoute = require("express").Router();
const {
  AddProduct,
  ReadSingleProduct,
  ReadAllProduct,
  UpdateProduct,
  DeleteProduct,
} = require("../controller/ProductController");

// add product
ProductRoute.post("/", AddProduct);

//read all products
ProductRoute.get("/", ReadAllProduct);

//readsingle product
ProductRoute.get("/:id", ReadSingleProduct);

//update product
ProductRoute.patch("/:id", UpdateProduct);

//delete product
ProductRoute.delete("/:id", DeleteProduct);

module.exports = ProductRoute;
