const router = require('express').Router()

const techController = require('../controllers/techController')

//GET ALL TECHNOLOGIES
router.get('/', techController.getAll)

module.exports = router