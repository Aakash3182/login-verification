const { StatusCodes } = require("http-status-codes");
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../util/token");

//home controller
const homeController = (req, res) => {
  try {
    res.json({ message: "home controller" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

//register user controller
const registerUser = async (req, res) => {
  try {
    let { email, mobile, password } = req.body;

    //validate the email
    let exEmail = await User.findOne({ email });
    if (exEmail)
      return res
        .status(StatusCodes.CONFLICT)
        .json({ status: false, msg: `${email} already registered` });

    // validate the mobile number
    const exMobile = await User.findOne({ mobile });
    if (exMobile)
      return res
        .status(StatusCodes.CONFLICT)
        .json({ status: false, msg: `${mobile} already registered` });

    // encrypt the password
    let encPass = await bcrypt.hash(password, 10);

    //validate the model
    let newUser = await User({
      ...req.body,
      password: encPass,
    });

    newUser.save();

    res.status(StatusCodes.ACCEPTED).json({
      status: true,
      msg: "new user successfully registered",
      user: newUser,
    });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

//login usercontroller
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //email validation
    let exEmail = await User.findOne({ email });
    if (!exEmail)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: `registered ${email} not found ` });

    // compare the password
    let isMatch = await bcrypt.compare(password, exEmail.password);
    if (!isMatch)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ status: false, msg: `password invalid` });

    // generate  the auth token
    let token = await generateToken(exEmail._id);
    res
      .status(StatusCodes.OK)
      .json({ status: true, msg: "login successful", token });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

//logout user controller
const logoutUser = async (req, res) => {
  try {
    res.json({ message: "logout controller" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: err.message });
  }
};

//validate user controller
const verifyUser = async (req, res) => {
  try {
    res.json({ message: "verify user controller" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: err.message });
  }
};

//default controller
const DefaultController = async (req, res) => {
  try {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "requested path not found" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

module.exports = {
  homeController,
  registerUser,
  loginUser,
  logoutUser,
  verifyUser,
  DefaultController,
};
