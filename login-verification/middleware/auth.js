const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.header("authorization");

    if (!token)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: false, msg: "TOKEN NOT FOUND" });

    // verify the token
    await jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
      if (err)
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ status: false, msg: "INVALID TOKEN" });

      // return res.status(StatusCodes.OK).json({ status: true, data });
      // we can get the data from the token

      req.userID = data.id;

      next(); // to move to the verify user in authcontroller
    });

    // res.json({ message: "auth middleware", token });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

module.exports = authMiddleware;
