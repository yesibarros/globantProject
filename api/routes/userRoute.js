const router = require("express").Router();
const userController = require("../controllers/userController");
const checkJWT = require("../middleware/JWTmiddleware");
const {verifyData} = require('../middleware')

// GET USER PROFILE
router.get("/", checkJWT, userController.getUser);
// GET MATCHES
router.post("/userstype", checkJWT, userController.getAllUserbyParam);
//UPDATE USER
router.put('/:id', [checkJWT, verifyData], userController.updateById)


module.exports = router;
