const router = require("express").Router();
const {
  newRequest,
  acceptRequest,
  cancelRequest,
  getMatchs,
  updateById,
  getUser,
  getPendingRequests,
  cancelMatch,
} = require("../controllers/userControllers");
const checkJWT = require("../middleware/JWTmiddleware");
const { verifyData } = require("../middleware");

router.get("/", checkJWT, getUser);
router.get("/userstype", checkJWT, getMatchs);
router.get("/pendingRequests", checkJWT, getPendingRequests);
router.post("/cancelMatch", [checkJWT], cancelMatch);
router.post("/:id/newRequest", [checkJWT], newRequest);
router.put("/:id/acceptRequest", [checkJWT, verifyData], acceptRequest);
router.put("/:id/cancelRequest", [checkJWT, verifyData], cancelRequest);
router.put("/:id", [checkJWT, verifyData], updateById);

module.exports = router;
