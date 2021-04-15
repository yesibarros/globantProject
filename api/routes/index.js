const router = require("express").Router();
const objectivesRoutes = require("./objectivesRoute");
const userRoute = require("./userRoute");
const authRoute = require("./authRoutes");
const techRoute = require("./techRoute");
const locationRoute = require("./locationRoute");
const areaRoute = require("./areaRoute");
const countryRoute = require("./countryRoute");

router.use("/user", userRoute);
router.use("/auth", authRoute);
router.use("/techs", techRoute);
router.use("/locations", locationRoute);
router.use("/objectives", objectivesRoutes);
router.use("/areas", areaRoute);
router.use("/countries", countryRoute);

module.exports = router;
