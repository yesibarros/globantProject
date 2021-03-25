const Technology = require('../models/Technology')

const techController = {}

techController.getAll = (req,res,next)=>{
    Technology.find()
              .then(technologies => res.send(technologies))
              .catch(next)
}

module.exports = techController