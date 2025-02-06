const userRoute = require("express").Router();
const { updateProfile } = require("../controller/userController");
const authMiddleware = require("../middleware/auth");

//patch
userRoute.patch(`/update/profile`, authMiddleware, updateProfile);

module.exports = userRoute;
