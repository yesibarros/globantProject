const router = require("express").Router();
const authController = require("../controllers/authController");
const {JWTmiddleware, verifyData} = require('../middleware')


// we are in /api/auth

//LOGIN
router.post("/login", authController.login);
//REGISTER
router.post("/register", verifyData, authController.register);
//ME
router.post("/me", JWTmiddleware, authController.me);

module.exports = router;
