const router = require("express").Router();
const authController = require("../controllers/authController");
const {verifyData} = require('../middleware')

//LOGIN
router.post("/login", authController.login);
//REGISTER
router.post("/register", verifyData, authController.register);
//ME
router.post("/me", authController.me);

module.exports = router;
