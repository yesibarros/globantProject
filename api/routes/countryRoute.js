const router = require("express").Router();

const countryController = require("../controllers/countryController");
const { JWTmiddleware } = require("../middleware");

router.get("/", countryController.getAll);
router.post("/", [JWTmiddleware], countryController.createOne);
router.put("/:id", [JWTmiddleware], countryController.modifyOne);
router.delete("/:id", [JWTmiddleware], countryController.deleteOne);
module.exports = router;
