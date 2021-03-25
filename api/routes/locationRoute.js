const router = require('express').Router()
const locationController = require('../controllers/locationController')

//GET ALL LOCATIONS
router.get('/', locationController.getAll)


module.exports = router