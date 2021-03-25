require("dotenv").config();

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const User = require("../models/User");

const checkJWT = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).send("Unauthorized");

  const token = req.headers.authorization.split(" ")[1];
  const dataPayload = jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) {
      res.status(401).send("no podes entrar");
    }
    return decoded;
  });

  if (dataPayload) {
    User.findById(dataPayload.id).then((fullUser) => {
      req.user = fullUser;
      next();
    });
  }
};

module.exports = checkJWT;
