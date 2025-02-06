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
      .json({ status: false, msg: err.message });
  }
};
//read single category
const read_single_category = async (req, res) => {
  try {
    // read the category id
    let id = req.params.id;

    let exCat = await Category.findById(id);
    if (!exCat) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: "requsted category not found" });
    }
    res.status(StatusCodes.ACCEPTED).json({ category: exCat });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ satus: false, msg: err.message });
  }
};
// update category
const update_category = async (req, res) => {
  try {
    // read the category id
    let id = req.params.id;

    let exCat = await Category.findById(id);
    if (!exCat)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: "requested category not found" });

    //update logic
    await Category.findByIdAndUpdate({ _id: id }, req.body);

    res
      .status(StatusCodes.ACCEPTED)
      .json({ msg: "category updated successfully" });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};
// dalete category
const delete_category = async (req, res) => {
  try {
    // read the category id
    let id = req.params.id;

    let exCat = await Category.findById(id);
    if (!exCat)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: "requsted category not found" });

    //delete logic
    await Category.findByIdAndDelete({ _id: id });
    res.status(StatusCodes.ACCEPTED).json({ msg: "category deleted" });
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

module.exports = {
  add_category,
  read_all_category,
  read_single_category,
  update_category,
  delete_category,
};
