const router = require('express').Router()

const techController = require('../controllers/techController')

// we are in /api/techs

//GET ALL TECHNOLOGIES
router.get('/', techController.getAll)

module.exports = router