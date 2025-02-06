const User = require("../model/user");
const { StatusCodes } = require("http-status-codes");

const updateProfile = async (req, res) => {
  try {
    let id = req.userID;

    let exUser = await User.findById(id);
    if (!exUser)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: true, msg: `requested user id is not found` });

    await User.findByIdAndUpdate({ _id: id }, req.body);

    return res
      .status(StatusCodes.ACCEPTED)
      .json({ status: true, msg: `user profile updated` });
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ status: false, msg: err.message });
  }
};

module.exports = { updateProfile };
