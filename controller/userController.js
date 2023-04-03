const User = require("../model/userModel");

const createAccount = async (req, res) => {
  try {
    const { username, email, password, captcha } = req.body;

    const newUser = await User.create({
      username,
      email,
      password,
      captcha,
    });

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = {
  createAccount,
};
