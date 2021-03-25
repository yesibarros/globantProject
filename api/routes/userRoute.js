const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUser);
router.get("/userstype", userController.getAllUserbyParam);

module.exports = router;
