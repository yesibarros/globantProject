const router = require("express").Router();
const authController = require("../controllers/authController");

//LOGIN
router.post("/login", authController.login);
//REGISTER
router.post("/register", authController.register);
//ME
router.post("/me", authController.me);

module.exports = router;
