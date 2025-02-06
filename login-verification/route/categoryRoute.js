const categoryRoute = require("express").Router();
const {
  add_category,
  read_all_category,
  read_single_category,
  update_category,
  delete_category,
} = require("../controller/categoryController");

//post
categoryRoute.post("/", add_category);

//get
categoryRoute.get("/", read_all_category);
categoryRoute.get("/:id", read_single_category);

//update
categoryRoute.patch("/:id", update_category);

//delete
categoryRoute.delete("/:id", delete_category);

module.exports = categoryRoute;
