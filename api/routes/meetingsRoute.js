const router = require("express").Router();
const meetingsController = require("../controllers/meetingsController");
const checkJWT = require("../middleware/JWTmiddleware");

router.get("/", checkJWT, meetingsController.getMeet);
router.post("/create", checkJWT, meetingsController.createMeet);
router.put("/update/:id", checkJWT, meetingsController.updateMeet);
router.delete("/delete/:id", checkJWT, meetingsController.deleteMeet);

module.exports = router;
