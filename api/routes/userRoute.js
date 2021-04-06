const router = require("express").Router();
const {newRequest, acceptRequest, cancelRequest, getMatchs, updateById, getUser, getPendingRequests} = require("../controllers/userControllers")
const checkJWT = require("../middleware/JWTmiddleware");
const {verifyData} = require('../middleware')

// GET USER PROFILE
router.get("/", checkJWT, getUser);
// GET MATCHES
router.get("/userstype", checkJWT, getMatchs);
// GET MATCHES
router.get("/pendingRequests", checkJWT, getPendingRequests);
//NEW REQUEST
router.post('/:id/newRequest', [checkJWT, verifyData], newRequest)
//ACCEPT REQUEST
router.put('/:id/acceptRequest', [checkJWT, verifyData], acceptRequest)
//CANCEL REQUEST
router.put('/:id/cancelRequest', [checkJWT, verifyData], cancelRequest)
//UPDATE USER
router.put('/:id', [checkJWT, verifyData], updateById)


module.exports = router;
