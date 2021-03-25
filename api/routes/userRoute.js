const router = require('express').Router();
const userController = require("../controllers/userController");
// const authJWT = require('../middleware/authJWT');

router.get("/", userController.getUser); // agregar midleware --> authJWT
router.get("/userstype" , userController.getAllUserbyParam);


module.exports = router