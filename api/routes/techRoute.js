const router = require("express").Router();

const techController = require("../controllers/techController");
const { JWTmiddleware, roles } = require("../middleware");

router.get("/", techController.getAll);
router.post("/", [JWTmiddleware], techController.createOne);
router.put("/:id", [JWTmiddleware], techController.modifyOne);
router.delete("/:id", [JWTmiddleware], techController.deleteOne);

module.exports = router;
