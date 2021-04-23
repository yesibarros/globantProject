const router = require("express").Router();
const locationController = require("../controllers/locationController");
const { JWTmiddleware } = require("../middleware");

router.get("/", locationController.getAll);
router.post("/", [JWTmiddleware], locationController.createOne);
router.put("/:id", [JWTmiddleware], locationController.modifyOne);
router.delete("/:id", [JWTmiddleware], locationController.deleteOne);

module.exports = router;
