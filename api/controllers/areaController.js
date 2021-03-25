const Area = require('../models/Area')

const areaController = {}

areaController.getAll = (req,res,next)=>{
    Area.find()
        .then(areas => res.send(areas))
        .catch(next)
}

module.exports = areaController