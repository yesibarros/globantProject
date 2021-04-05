const router = require("express").Router();
const {newRequest, acceptRequest, cancelRequest, getMatchs, updateById, getUser} = require("../controllers/userControllers")
const checkJWT = require("../middleware/JWTmiddleware");
const { verifyData } = require("../middleware");

// GET USER PROFILE
router.get("/", checkJWT, getUser);
// GET MATCHES
router.get("/userstype", checkJWT, getMatchs);
//NEW REQUEST
router.post('/:id/newRequest', [checkJWT, verifyData], newRequest)
//ACCEPT REQUEST
router.put('/:id/acceptRequest', [checkJWT, verifyData], acceptRequest)
//CANCEL REQUEST
router.put('/:id/cancelRequest', [checkJWT, verifyData], cancelRequest)
//UPDATE USER
<<<<<<< HEAD
router.put("/:id", [checkJWT, verifyData], userController.updateById);
=======
router.put('/:id', [checkJWT, verifyData], updateById)

>>>>>>> 322dbb0f34f3482f4c26e7367a304e2ab5d2c3c8

module.exports = router;
