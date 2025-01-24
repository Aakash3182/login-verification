const category = require("../model/category");
const Category = require("../model/category");
const { StatusCodes } = require("http-status-codes");

// add category
const add_category = async (req, res) => {
  try {
    let { title } = req.body;

    let exCat = await Category.findOne({ title });
    if (exCat) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: false, msg: "category title already exist" });
    }

    let newCat = await Category.create(req.body);

    res.json({ msg: "category added successfully", category: newCat });

    res.json({ msg: "add" });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
// read all category
const read_all_category = async (req, res) => {
  try {
    let categories = await Category.find({});

    res.status(StatusCodes.OK).json({ length: categories.length, categories });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ satus: false, msg: err.message });
  }
};
//read single category
const read_single_category = async (req, res) => {
  try {
    res.json({ msg: "read single" });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ satus: false, msg: err.message });
  }
};
// update category
const update_category = async (req, res) => {
  try {
    res.json({ msg: "update" });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ satus: false, msg: err.message });
  }
};
// dalete category
const delete_category = async (req, res) => {
  try {
    res.json({ msg: "dalete" });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ satus: false, msg: err.message });
  }
};

module.exports = {
  add_category,
  read_all_category,
  read_single_category,
  update_category,
  delete_category,
};
