const Product = require("../model/product");
const { StatusCodes } = require("http-status-codes");

// add products
const AddProduct = async (req, res) => {
  try {
    let { title } = req.body;

    let exProd = await Product.findOne({ title });
    if (exProd) {
      return res
        .status(StatusCodes.CONFLICT)
        .json({ status: false, msg: "Product already exists" });
    }

    await Product.create(req.body);

    res.json({ status: true, msg: "Product added successfully" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

// readall products
const ReadAllProduct = async (req, res) => {
  try {
    let products = await Product.find();

    res.json({ length: products.length, products });
  } catch (err) {
    return res
      .status(StatusCodes.ACCEPTED)
      .json({ status: false, msg: err.message });
  }
};

// readSingle products
const ReadSingleProduct = async (req, res) => {
  try {
    let id = req.params.id;

    let prod = await Product.findById(id);
    if (!prod)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: "Product not found" });
    res.status(StatusCodes.ACCEPTED).json({ product: prod });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
// Update products
const UpdateProduct = async (req, res) => {
  try {
    let id = req.params.id;

    let prod = await Product.findById(id);
    if (!prod)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: "Product not found" });

    await Product.findByIdAndUpdate({ _id: id }, req.body);
    res
      .status(StatusCodes.ACCEPTED)
      .json({ msg: " product updated successfully" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
// delete products
const DeleteProduct = async (req, res) => {
  try {
    let id = req.params.id;

    let prod = await Product.findById(id);
    if (!prod)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: "Product not exists" });

    await Product.findByIdAndDelete({ _id: id });

    res
      .status(StatusCodes.ACCEPTED)
      .json({ status: true, msg: "Product deleted successfully" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
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
