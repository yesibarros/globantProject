const router = require('express').Router()

const techController = require('../controllers/techController')
const { JWTmiddleware, roles } = require('../middleware')

// we are in /api/techs

//GET ALL TECHNOLOGIES
router.get('/', techController.getAll)
//CREATE ONE
router.post('/', [JWTmiddleware, roles.isAdmin], techController.createOne)
//UPDATE BY ID
router.put('/:id', [JWTmiddleware, roles.isAdmin], techController.modifyOne)
//DELETE BY ID
router.delete('/:id', [JWTmiddleware, roles.isAdmin], techController.deleteOne)

module.exports = router