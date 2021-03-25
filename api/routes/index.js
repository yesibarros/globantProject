const router = require('express').Router();

const userRoute = require('./userRoute');
const authRoute = require('./authRoutes')

router.use('/user', userRoute);
router.use('/auth', authRoute)

module.exports = router;