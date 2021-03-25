const router = require('express').Router();

const userRoute = require('./userRoute');
const authRoute = require('./authRoutes')
const techRoute = require('./techRoute')
const locationRoute = require('./locationRoute')
const areaRoute = require('./areaRoute')

router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/techs', techRoute);
router.use('/locations', locationRoute);
router.use('/areas', areaRoute);

module.exports = router;