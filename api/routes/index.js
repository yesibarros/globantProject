const router = require('express').Router();

const userRoute = require('./userRoute');
const authRoute = require('./authRoute')
const techRoute = require('./techRoute')
const locationRoute = require('./locationRoute')
const areaRoute = require('./areaRoute')

router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/techs', techRoute);
router.use('/locations', locationRoute);
router.use('/areas', areaRoute);

module.exports = router;