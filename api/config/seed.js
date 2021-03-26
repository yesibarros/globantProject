// CONFIG: Change these values as needed
const technologiesArray = [{n:"Java", w:6 }, {n:"JavaScript", w: 6}, {n:"mongoDB", w: 1}, {n:"React",w:4}, {n:"Go",w:3}, {n:"Sequelize",w:1}, {n:"Postgres",w:1}, {n:"Node",w:7}, {n:"PHP",w:6}, {n:"Three.js",w:2}, {n:"React-Native",w:4}, {n:"Redux",w:1},{n:"Angular", w:4}]
const areasArray = ["FrontEnd", "Node Developer", "PHP Developer", "Leadership", "Automated Testing"]
const locationsArray = ["Buenos Aires 1", "Buenos Aires 2", "London", "Cordova", "Rosario", "Seattle", "CDMX"]
const objectiveNames = ["Aprender JavaScript", "Aprender Node", "Hacer el back en un proyecto", "Aprender HTML", "Aprender PHP", "Hacer curso de SCRUM", "Aprender Jasmine", "Trabajar en 10 proyectos", "Aprender Redux"]
const maxAmountOfTechnologiesPerUser = 15
const maxAmountOfAreasPerUser = 5
const maxAmountOfObjectivesPerUser = 6
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
const LoremIpsum = require("lorem-ipsum").LoremIpsum

//DB CONNECTION
const { connection } = require("./index.js");

//MODELS
const { Technology, User, Location, Area, Objective } = require('../models/index')

//LOREM CONFIG
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

const setup = async () => {
    console.log("Starting the seeding process 🌱")

    //CREATE TECHNOLOGIES
    console.log("🔧 Technology seeds...") //Deberiamos guardar dos nombres en la DB? El nombre con mayúsculas, guiones, espacios, etc, y uno "normalizado"
    const startTechsObjs = technologiesArray.map(t => ({technologyName: t.n, technologyWeight: t.w}))
    const technologies = await Technology.create(startTechsObjs);
    console.log("    ✓ Technologies seeded successfully!");

    //CREATE AREAS
    console.log("🗂  Area seeds...")
    const startAreasObjs = areasArray.map(a => ({areaName: a})) //areas get 8 of weight per default in the model
    const areas = await Area.create(startAreasObjs)
    console.log("    ✓ Areas seeded successfully!")

    //CREATE LOCATIONS
    console.log("🌎 Location seeds...")
    const startLocationsObjs = locationsArray.map(l => ({locationName: l}))
    const locations = await Location.create(startLocationsObjs)
    console.log("    ✓ Locations seeded successfully!")

    //CREATE OBJECTIVES
    console.log("🎯 Objective seeds...")
    const startObjectivesObjs = []
    for(let i = 0; i < objectiveNames.length; i++){
        startObjectivesObjs.push({
            objectiveName: objectiveNames[Math.floor(Math.random()*objectiveNames.length)],
            description: lorem.generateSentences(Math.ceil(Math.random()*2)),
            status: ["pending", "achieved", "excellent"][Math.floor(Math.random()*3)]
        })
    }
    const objectives = await Objective.create(startObjectivesObjs)
    console.log("    ✓ Objectives seeded successfully!")


    //CREATE USERS
    //Helper: builds a random array from a list(an other array)
    const getRandom = (list, max)=>{
        const a = []
        const maxQty = Math.ceil(Math.random() * (max-1))
        for (let j = 0; j < maxQty; j++){
            const toPush = list[Math.floor(Math.random() * list.length)]
            if (!a.includes(toPush)) a.push(toPush)
        }
        return a
    }
   
    const startUsersObjs = [] //Array of users to be saved

    //PUSH HARCODED ADMIN USER
        startUsersObjs.push({
            firstName: "Fabri",
            lastName: "Guada",
            password: "admin",
            email: "admin@admin.com",
            workingSince: 2010, 
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
            workingSince: 2010, 
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
            workingSince: new Date().getFullYear() - Math.floor(Math.random()*3),
            img: faker.image.image(),
            objectives: getRandom(objectives, maxAmountOfObjectivesPerUser),
            areas: getRandom(areas, maxAmountOfAreasPerUser),
            technologies: getRandom(technologies, maxAmountOfTechnologiesPerUser),
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
            workingSince: new Date().getFullYear() - 1 - Math.floor(Math.random()*10),
            role: ["mentor"],
            img: faker.image.image(),
            areas: getRandom(areas, maxAmountOfAreasPerUser),
            technologies: getRandom(technologies, maxAmountOfTechnologiesPerUser),
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
            workingSince: new Date().getFullYear() - 1 - Math.floor(Math.random()*10),
            objectives: getRandom(objectives, maxAmountOfObjectivesPerUser),
            areas: getRandom(areas, maxAmountOfAreasPerUser),
            img: faker.image.image(),
            technologies: getRandom(technologies, maxAmountOfTechnologiesPerUser),
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