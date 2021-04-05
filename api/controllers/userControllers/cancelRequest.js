const { User } = require("../../models");
const userFindAndPopulate = require("../../utils/userFindAndPopulate");

const cancelRequest = async (req, res, next)=>{
    res.send("cancel request")
}

module.exports = cancelRequest