const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const {JWT_SECRET} = process.env

const authController = {}

    authController.login = (req,res,next)=>{

    }
    
    authController.register = (req,res,next)=>{
        console.log(req.body)
        
        req.body.role = ['mentee']
        User.create(req.body)
            .then(user => {
                const token = jwt.sign({id: user._id}, JWT_SECRET)
        console.log("user",user)
                
                res.status(201).send(token)
            })
            .catch(next)
    }
    
    authController.me = (req,res,next)=>{

    }

module.exports = authController