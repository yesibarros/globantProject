const {User, Location, Area, Technology} = require('../models/index')
const mongoose = require('mongoose')

const verifyData = async (req,res,next)=>{
    let {email, role, mentees, mentor, location, technologies, areas, workingSince} = req.body

    if(email || role || mentees || mentor || location || technologies || areas || workingSince){
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

                //VALIDAR SI SEGUN LA ANTIGUEDAD PUEDE SER MENTOR
            }

            //MENTEES VALIDATION
            if(mentees){        
                //Just in case, check that te array is not empty
                if(!mentees.length) return res.status(400).json({message: "Ups! No mentees were sent"})
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
                console.log("mentor validation")
                //Check for valid mongoose id
                if( !mongoose.Types.ObjectId.isValid(mentor) ) return res.status(400).json({message: `Ups! ${mentor} is not a valid user's id`})
                //Check that mentor exists
                const realMentor = await User.find({_id: mentor})
                if(!realMentor) return res.status(400).json({message: `Ups! ${mentor} is not an existing user id`})
            }

            //TECHNOLOGIES VALIDATION
            if(technologies){
                console.log("technologies validation")
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
                console.log("areas validation")
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

            //VALIDAR AÑO

        } catch(err){
            next(err)
        }

    }
    next()
}

module.exports = verifyData

