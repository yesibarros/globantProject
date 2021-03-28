const router = require('express').Router()
const locationController = require('../controllers/locationController')
const { JWTmiddleware, roles } = require('../middleware')

// we are in /api/location

//GET ALL LOCATIONS
router.get('/', locationController.getAll)
//CREATE ONE
router.post('/', [JWTmiddleware, roles.isAdmin], locationController.createOne)
//UPDATE BY ID
router.put('/:id', [JWTmiddleware, roles.isAdmin], locationController.modifyOne)
//DELETE BY ID
router.delete('/:id', [JWTmiddleware, roles.isAdmin], locationController.deleteOne)

module.exports = router