const router = require('express').Router()
const areaController = require('../controllers/areaController')
const { JWTmiddleware, roles } = require('../middleware')
// we are in /api/areas

//GET ALL AREAS
router.get('/', areaController.getAll)
//CREATE ONE
router.post('/', [JWTmiddleware], areaController.createOne)
//UPDATE BY ID
router.put('/:id', [JWTmiddleware], areaController.modifyOne)
//DELETE BY ID
router.delete('/:id', [JWTmiddleware], areaController.deleteOne)

module.exports = router