
const isAdmin = (req,res,next)=>{
    if(!req.user.role.includes("admin")) return res.status(403).json({message: "unauthorized"})
    next()
}

const isMentee = (req,res,next)=>{
    if(!req.user.role.includes("mentee")) return res.status(403).json({message: "unauthorized"})
    next()
}

const isMentor = (req,res,next)=>{
    if(!req.user.role.includes("mentor")) return res.status(403).json({message: "unauthorized"})
    next()
}


module.exports = {isAdmin, isMentee, isMentor}