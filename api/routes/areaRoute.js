const router = require('express').Router()
const areaController = require('../controllers/areaController')

// we are in /api/areas

//GET ALL AREAS
router.get('/', areaController.getAll)


module.exports = router