const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET, GOOGLE_CLIENT } = process.env;

const axios = require('axios')

const userFindAndPopulate = require("../utils/userFindAndPopulate");

//GOOGLE AUTH
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(GOOGLE_CLIENT)

//CONTROLLER
const authController = {};

authController.login = (req, res, next) => {
  
  const { email, password } = req.body;

  userFindAndPopulate({ email }).then((user) => {
    if (!user) return res.status(400).send("User not found");

    user.hash(password, user.salt).then((hashPassword) => {
      if (hashPassword !== user.password) return res.status(400).send("Invalid credentials");

      user.password = 0;
      user.salt = 0;

      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res.status(201).send({ user, token });
    });
  });
};

authController.google = (req, res, next) => {
  console.log("auth controller:")
  const { token } = req.body;
  //Una forma de verificar el token:
  //client.getTokenInfo(token).then(response=> console.log(response))
  
  //Pero con esto traemos al usuario y listo
  const url = `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`
  axios.get(url).then(response=>{
    const data= response? response.data : null
    if(!data) return res.status(400).send("Invalid credentials")
    userFindAndPopulate({email: data.email})
    .then(user=>{
      console.log(user)
      if(user?.email && !user.googleId) return res.status(400).send("This user already exists")
      if(user?.email && user.googleId){
        const token = jwt.sign({id: user._id}, JWT_SECRET)
        return res.status(201).send({user,token})
      }
      if(!user) {
        const newUser = {
          googleId: data.id,
          firstName: data.given_name,
          lastName: data.family_name,
          img: data.picture,
          email: data.email,
          password: "pass"+ Math.random() * 10000 //Revisar esto
        }
        User.create(newUser)
            .then(createdUser => {
              console.log("CREATED USER", createdUser)
              const token = jwt.sign({id: createdUser._id}, JWT_SECRET)
              return res.status(201).send({createdUser,token})
            })
      }
    })
  })
 
};

authController.register = (req, res, next) => {
  req.body.role = ["mentee"];

  User.create(req.body)
    .then((user) => {
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res.status(201).send({ user, token });
    })
    .catch(next);
};

authController.me = (req, res, next) => {
  if(req.user){
    res.send(user)
  } else {
    res.staus(403).json({message: "unauthorized"})
  }
};

module.exports = authController;
