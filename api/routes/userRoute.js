const router = require("express").Router();
const userController = require("../controllers/userController");
const checkJWT = require("../middleware/JWTmiddleware");

router.get("/", checkJWT, userController.getUser);
router.get("/userstype", checkJWT, userController.getAllUserbyParam);

module.exports = router;
