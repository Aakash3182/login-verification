const Product = require("../model/product");
const { StatusCodes } = require("http-status-codes");

// add products
const AddProduct = async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(StatusCodes.CREATED).json({ status: true, msg: "Product added", product: newProduct });
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, msg: err.message });
    }
  };
  
// readSingle products
const ReadSingleProduct = async (req, res) => {
  try {
    res.json({ msg: "readsingle product" });
  } catch (err) {
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ status: false, msg: err.message });
  }
};
// readall products
const ReadAllProduct = async (req, res) => {
  try {
    res.json({ msg: "read all products" });
  } catch (err) {
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ status: false, msg: err.message });
  }
};
// Update products
const UpdateProduct = async (req, res) => {
  try {
    res.json({ msg: "product Updated" });
  } catch (err) {
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ status: false, msg: err.message });
  }
};
// delete products
const DeleteProduct = async (req, res) => {
  try {
    res.json({ msg: "product deleted" });
  } catch (err) {
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ status: false, msg: err.message });
  }
};

module.exports = {
  AddProduct,
  ReadSingleProduct,
  ReadAllProduct,
  UpdateProduct,
  DeleteProduct,
};
