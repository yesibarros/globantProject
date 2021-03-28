const router = require("express").Router();
const authController = require("../controllers/authController");
const {verifyData} = require('../middleware')


// we are in /api/auth

//LOGIN
router.post("/login", authController.login);
//REGISTER
router.post("/register", verifyData, authController.register);
//ME
router.post("/me", authController.me);

module.exports = router;
