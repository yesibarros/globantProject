const router = require("express").Router();
const authController = require("../controllers/authController");
const { JWTmiddleware, verifyData } = require("../middleware");

router.post("/login", authController.login);
router.post("/google", authController.google);
router.post("/register", verifyData, authController.register);
router.post("/me", JWTmiddleware, authController.me);

module.exports = router;
