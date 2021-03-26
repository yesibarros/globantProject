// CONFIG: Change these values as needed
const technologiesArray = ["Java", "JavaScript", "mongoDB", "React", "Go", "Sequelize", "Postgres", "Node", "PHP", "Three.js", "React-Native", "Redux"]
const areasArray = ["FrontEnd", "Node Developer", "PHP Developer", "Leadership", "Automated Testing"]
const locationsArray = ["Buenos Aires 1", "Buenos Aires 2", "London", "Cordova", "Rosario", "Seattle", "CDMX"]
const maxAmountOfTechnologiesPerUser = 15
const maxAmountofAreasPerUser = 5
const adminRandomUsers = 2
const menteeUsers = 40
const mentorUsers  = 15
const menteeAndMentorUsers = 6
const maxMenteesPerMentor = 5

/*

HARDCODED ADMIN: 

email: admin@admin.com
password: admin

*/

//*************************--SEED--******************************//
//Do not change anything from below

const faker = require("faker");
const Promise = require("bluebird");

//DB CONNECTION
const { connection } = require("./index.js");

//MODELS
const { Technology, User, Location, Area, Objective } = require('../models/index')

const setup = async () => {
    console.log("Stating the seeding process 🌱")

    //CREATE TECHNOLOGIES
    console.log("🔧 Technology seeds...") //Deberiamos guardar dos nombres en la DB? El nombre con mayúsculas, guiones, espacios, etc, y uno "normalizado"
    const startTechsObjs = technologiesArray.map(t => ({technologyName: t}))
    const technologies = await Technology.create(startTechsObjs);
    console.log("    ✓ Technologies seeded successfully!");

    //CREATE AREAS
    console.log("🗂  Area seeds...")
    const startAreasObjs = areasArray.map(a => ({areaName: a}))
    const areas = await Area.create(startAreasObjs)
    console.log("    ✓ Areas seeded successfully!")

    //CREATE LOCATIONS
    console.log("🌎 Location seeds....")
    const startLocationsObjs = locationsArray.map(l => ({locationName: l}))
    const locations = await Location.create(startLocationsObjs)
    console.log("    ✓ Locations seeded successfully!")


    //CREATE USERS
    //Build random array of technologies
    const getTechsForUser = ()=>{
        const t = []
        const maxQty = Math.ceil(Math.random() * (maxAmountOfTechnologiesPerUser-1)) 
        for (let j = 0; j < maxQty; j++){
            const techToPush = technologies[Math.floor(Math.random() * technologies.length)]
            if (!t.includes(techToPush)) t.push(techToPush)
        }
        return t
    }

    //Build random array of areas
    const getAreasForUser = ()=>{
        const a = []
        const maxQty = Math.ceil(Math.random() * (maxAmountofAreasPerUser-1))
        for (let j = 0; j < maxQty; j++){
            const areasToPush = areas[Math.floor(Math.random() * areas.length)]
            if (!a.includes(areasToPush)) a.push(areasToPush)
        }
        return a
    }

    //Build random array of roles
    /* const getRolesForUser = ()=>{
        const r = []
        const roles = ["admin", "mentee", "mentor"]
        for(let i = 0; i < Math.ceil(Math.random() * (roles.length-1)); i++){
            r.push(roles[Math.floor(Math.random() * roles.length)])
        }
        return r
    } */
    
    const startUsersObjs = [] //Array of users to be saved

    //PUSH HARCODED ADMIN USER
        startUsersObj.push({
            firstName: "Fabri",
            lastName: "Guada",
            password: "admin",
            email: "admin@admin.com",
            img: faker.image.image(),
            role: ["admin"],
            location: locations[Math.floor(Math.random() * locations.length)]
        })

    //PUSH ADMIN RANDOM USERS
    for (let i = 0; i < adminRandomUsers; i++){
        startUsersObjs.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: faker.internet.password(),
            email: faker.internet.email(),
            img: faker.image.image(),
            role: ["admin"],
            location: locations[Math.floor(Math.random() * locations.length)]
        })
    }

    //PUSH MENTEE USERS
    for (let i = 0; i < menteeUsers; i++){
        startUsersObjs.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: faker.internet.password(),
            email: faker.internet.email(),
            role: ["mentee"],
            img: faker.image.image(),
            areas: getAreasForUser(),
            technologies: getTechsForUser(),
            location: locations[Math.floor(Math.random() * locations.length)]
        })
    }

    //PUSH MENTOR USERS
    for (let i = 0; i < mentorUsers; i++){
        startUsersObjs.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: faker.internet.password(),
            email: faker.internet.email(),
            role: ["mentor"],
            img: faker.image.image(),
            areas: getAreasForUser(),
            technologies: getTechsForUser(),
            location: locations[Math.floor(Math.random() * locations.length)]
        })
    }

    //PUSH MENTEE-MENTOR USERS
    for (let i = 0; i < menteeAndMentorUsers; i++){
        startUsersObjs.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: faker.internet.password(),
            email: faker.internet.email(),
            role: ["mentee","mentor"],
            areas: getAreasForUser(),
            img: faker.image.image(),
            technologies: getTechsForUser(),
            location: locations[Math.floor(Math.random() * locations.length)]
        })
    }

    console.log("👥 User seeds...")
    const users = await User.create(startUsersObjs) //Save array of users in database by creating the users
    console.log("    ✓ Users stage 1 seeded successfully!")
    
    //ADD MENTORS TO MENTEES (1 mentor per mentee)
    const mentees = users.filter(user => user.role.includes("mentee"))
    const mentors = users.filter(user => user.role.includes("mentor"))
    
    const updateUsers = [] //Array of updates to make
    mentees.forEach(mentee => {
        
        const mentor = mentors[Math.floor(Math.random() * mentors.length)]
        
        if(mentor.mentees.length < maxMenteesPerMentor){       
            mentor.mentees.push(mentee)
            updateUsers.push([mentee._id._id, {mentor}]) 
            updateUsers.push([mentor._id._id, {mentees: mentor.mentees}])    
        }
        
    })
    //Save all updates to the database
    const updatedUsers = await Promise.each(updateUsers, (user)=>{
        return User.findOneAndUpdate({_id: user[0]}, {...user[1]})
    })
    console.log("    ✓ Users stage 2 seeded successfully!")
    console.log("Finished seeding 🌳 You are all set!.")
}


try {
    connection.once("open", () => setup().then(() => process.exit(0)));
  } catch (err) {
    console.log("❌ Somethin went wrong on the seed process", err.message);
    process.exit(1);
  }