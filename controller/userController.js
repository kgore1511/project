const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");
const userController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Users.findOne({ email });
      if (!user) res.status(400).json({ msg: "user doesn't exists" });
      const isMatch = password == user.password;
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });
      const accesstoken = createAccessToken({ id: user._id });
      res.status(200).json({ accesstoken: accesstoken, user: user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

module.exports = userController;
