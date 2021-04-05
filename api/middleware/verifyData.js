const {User, Location, Area, Technology, Request} = require('../models/index')
const mongoose = require('mongoose')

const verifyData = async (req,res,next)=>{
    let {email, role, mentees, mentor, location, technologies, areas, workingSince, request} = req.body

    if(email || role || mentees || mentor || location || technologies || areas || workingSince || request){
        try{
            //EMAIL VALIDATION - Checks that user doesn't exist
            if(email){
                const user = await User.findOne({email})
                if (user) return res.status(400).json({message: "Ups! The user already exists"})
            }

            //ROLES VALIDATION
            if(role){
                //Just in case, checks that te array is not empty
                if(role.length === 0)return res.status(400).json({message: "Ups! No roles where sent"})
                //Remove duplicates
                role = Array.from(new Set(role))
                //Check that roles exist
                const actualRoles = ["mentee", "mentor", "admin"]
                for(let i = 0; i < role.length; i++){
                    if(!actualRoles.includes(role[i])) return res.status(400).json({message: `Ups! ${role[i]} is not a valid role`})
                }
                //Check that mentors have at least 1 year in the company
                if(workingSince){
                    if(role.includes("mentor") && (workingSince === new Date().getFullYear())) return res.status(400).json({message: `Ups! Mentors must have at least 1 year working in the company`})
                } else {
                    if(role.includes("mentor") && (req.user.workingSince === new Date().getFullYear())) return res.status(400).json({message: `Ups! Mentors must have at least 1 year working in the company`})
                }
                
            }

            //MENTEES VALIDATION
            if(mentees){        
                //Just in case, check that te array is not empty
                if(!mentees.length) return res.status(400).json({message: "Ups! No mentees were sent"})
                //Just in case, if objects are sent, extract their _id
                mentees = mentees.map(mentee=> typeof(mentee)== "object"? mentee._id : mentee)
                //Remove duplicates
                mentees = Array.from(new Set(mentees));
                //Check that the ids are valid mongoose ids
                for(let i = 0; i < mentees.length; i++){
                    if( !mongoose.Types.ObjectId.isValid(mentees[i]) ) return res.status(400).json({message: `Ups! ${mentees[i]} is not a valid user id`})
                }
                //Check if the ids correspond to a location
                const realMentees = await User.find({_id: {$in: mentees}})
                const realMenteesIds = realMentees.map(rm => rm._id.toString())
                for (let i = 0; i < mentees.length; i++){
                    if(!realMenteesIds.includes(mentees[i])) return res.status(400).json({message: `Ups! ${mentees[i]} is not an existing user id`})
                }
            }

            //MENTOR VALIDATION
            if(mentor){
                //Just in case, if mentor is an object, extract the _id
                mentor = typeof(mentor) == "object"? mentor._id : mentor
                //Check for valid mongoose id
                if( !mongoose.Types.ObjectId.isValid(mentor) ) return res.status(400).json({message: `Ups! ${mentor} is not a valid user's id`})
                //Check that mentor exists
                const realMentor = await User.find({_id: mentor})
                if(!realMentor) return res.status(400).json({message: `Ups! ${mentor} is not an existing user id`})
            }

            //TECHNOLOGIES VALIDATION
            if(technologies){
                //Just in case, check that te array is not empty
                if(!technologies.length) return res.status(400).json({message: "Ups! No technologies/skills were sent"})
                //Remove duplicates
                technologies = Array.from(new Set(technologies))
                //Check that the ids are valid mongoose ids
                for(let i = 0; i < technologies.length; i++){
                    if( !mongoose.Types.ObjectId.isValid(technologies[i]) ) return res.status(400).json({message: `Ups! ${technologies[i]} is not a valid technology/skill's id`})
                }
                //Check that the ids belong to valid technologies
                const realTechnologies = await Technology.find({_id: {$in: technologies}})
                const realTechnologiesIds = realTechnologies.map(rm => rm._id.toString())
                for (let i = 0; i < technologies.length; i++){
                    if(!realTechnologiesIds.includes(technologies[i])) return res.status(400).json({message: `Ups! ${technologies[i]} is not an existing technology/skill's id`})
                }
            }
            
            //AREAS VALIDATION
            if(areas){
                //Just in case, checks that te array is not empty
                if(!areas.length) return res.status(400).json({message: "Ups! No areas/profiles were sent"})
                //Remove duplicates
                areas = Array.from(new Set(areas))
                //Check that ids are valid mongoose ids
                for(let i = 0; i < areas.length; i++){
                    if( !mongoose.Types.ObjectId.isValid(areas[i]) ) return res.status(400).json({message: `Ups! ${areas[i]} is not a valid area id`})
                }
                //Check that areas exist
                const realAreas = await Area.find({_id: {$in: areas}})
                const realAreasIds = realAreas.map(rm => rm._id.toString())
                for (let i = 0; i < areas.length; i++){
                    if(!realAreasIds.includes(areas[i])) return res.status(400).json({message: `Ups! ${areas[i]} is not an existing area/profile id`})
                }
            }

            //LOCATION VALIDATION
            if(location){
                //Check that id is a valid mongoose id
                if( !mongoose.Types.ObjectId.isValid(location) ) return res.status(400).json({message: `Ups! ${location} is not a valid location's id`})
                //Check that id exists
                const realLocation = await Location.findById(location)
                if(!realLocation) return res.status(400).json({message: `Ups! ${location} is not a valid location's id`})
            }

            //WORKING SINCE VALIDATION
            if(workingSince){
                if(workingSince > new Date().getFullYear() || workingSince < 2003) return res.status(400).json({message: `Ups! The year you entered is not a valid year`})
            }

            //REQUEST VALIDATION
            if(request){
                //Just in case, checks that te array is not empty
                if(!request.length) return res.status(400).json({message: "Ups! No requests were sent"})
                //Remove duplicates
                request = Array.from(new Set(request))
                //Check that ids are valid mongoose ids
                for(let i = 0; i < request.length; i++){
                    if( !mongoose.Types.ObjectId.isValid(request[i]) ) return res.status(400).json({message: `Ups! ${request[i]} is not a valid request id`})
                }
                //Check that request exist
                const realRequests = await Request.find({_id: {$in: request}})
                const realRequestsIds = realRequests.map(rr => rr._id.toString())
                for (let i = 0; i < request.length; i++){
                    if(!realRequestsIds.includes(request[i])) return res.status(400).json({message: `Ups! ${request[i]} is not an existing request id`})
                }
            }

        } catch(err){
            next(err)
        }

    }
    next()
}

module.exports = verifyData

