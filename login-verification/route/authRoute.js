const authRoute = require("express").Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  verifyUser,
} = require("../controller/authController");

const authMiddleware = require("../middleware/auth"); //middleware to verify user

//register path
authRoute.post("/register", registerUser);

//login path
authRoute.post("/login", loginUser);

//logout path
authRoute.get("/logout", logoutUser);

//verify user path
authRoute.get("/verify/user", authMiddleware, verifyUser);

module.exports = authRoute;
