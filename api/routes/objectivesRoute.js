const router = require("express").Router();

const objectiveController = require("../controllers/objectiveController");
const { JWTmiddleware, roles } = require("../middleware");

router.get("/", objectiveController.getAll);
router.post(
  "/",
  [JWTmiddleware, roles.isMentor],
  objectiveController.createOne
);
router.put(
  "/:id",
  [JWTmiddleware, roles.isMentor],
  objectiveController.modifyOne
);
router.delete(
  "/:id",
  [JWTmiddleware, roles.isAdmin, roles.isMentor],
  objectiveController.deleteOne
);

module.exports = router;
