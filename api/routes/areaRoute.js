const router = require('express').Router()
const areaController = require('../controllers/areaController')



//GET ALL AREAS
router.get('/', areaController.getAll)


module.exports = router