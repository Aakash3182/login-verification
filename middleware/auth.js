const { StatusCodes } = require("http-status-codes");

const authMiddleware = (req, res, next) => {
  try {
    res.json({ message: "auth middleware" });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

module.exports = authMiddleware;
