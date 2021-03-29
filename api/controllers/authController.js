const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET } = process.env;
const userFindAndPopulate = require("../utils/userFindAndPopulate");

const authController = {};

authController.login = (req, res, next) => {
  
  const { email, password } = req.body;

  userFindAndPopulate({ email }).then((user) => {
    if (!user) return res.status(400).send("User not found");

    user.hash(password, user.salt).then((hashPassword) => {
      if (hashPassword !== user.password)
        return res.status(400).send("Invalid credentials");

      user.password = 0;
      user.salt = 0;

      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res.status(201).send({ user, token });
    });
  });
};

authController.register = (req, res, next) => {
  console.log("HOLAAAA", req.body)
  req.body.role = ["mentee"];

  User.create(req.body)
    .then((user) => {
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res.status(201).send(token);
    })
    .catch(next);
};

authController.me = (req, res, next) => {};

module.exports = authController;
