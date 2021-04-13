const router = require('express').Router()

const objectiveController = require('../controllers/objectiveController')
const { JWTmiddleware, roles } = require('../middleware')

// we are in /api/techs

//GET ALL OBJECTIVES FROM AN USER
router.get('/', objectiveController.getAll)
//CREATE ONE
router.post('/', [JWTmiddleware, roles.isAdmin, roles.isMentor], objectiveController.createOne)
//UPDATE BY ID
router.put('/:id', [JWTmiddleware, roles.isAdmin, roles.isMentor], objectiveController.modifyOne)
//DELETE BY ID
router.delete('/:id', [JWTmiddleware, roles.isAdmin, roles.isMentor], objectiveController.deleteOne)

module.exports = router