const authRoute = require("express").Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  verifyUser,
} = require("../controller/authController");

//register path
authRoute.post("/register", registerUser);

//login path
authRoute.post("/login", loginUser);

//logout path
authRoute.get("/logout", logoutUser);

//verify user path
authRoute.get("/verify/user", verifyUser);

module.exports = authRoute;
