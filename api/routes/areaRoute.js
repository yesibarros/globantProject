const router = require("express").Router();
const areaController = require("../controllers/areaController");
const { JWTmiddleware } = require("../middleware");

router.get("/", areaController.getAll);
router.post("/", [JWTmiddleware], areaController.createOne);
router.put("/:id", [JWTmiddleware], areaController.modifyOne);
router.delete("/:id", [JWTmiddleware], areaController.deleteOne);

module.exports = router;
