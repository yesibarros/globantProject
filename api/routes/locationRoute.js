const router = require('express').Router()
const locationController = require('../controllers/locationController')
const { JWTmiddleware, roles } = require('../middleware')

//GET ALL LOCATIONS
router.get('/', locationController.getAll)
router.post('/', [JWTmiddleware, roles.isAdmin], locationController.createOne)


module.exports = router