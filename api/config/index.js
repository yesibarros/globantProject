// CONFIG
require("dotenv").config();
const mongoose = require("mongoose");
const { networkInterfaces } = require("os");

const { DB_NAME, DB_PASSWORD } = process.env;

// MONGO ATLAS
mongoose
  .connect(
    `mongodb+srv://globant:${DB_PASSWORD}@globant.7ahj7.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("DB CONNECT!!"))
<<<<<<< HEAD
  .catch((e) => console.log("DB NO CONNECT ERROR", e));  

//BASE LOCAL DE PRUEBA
  // mongoose.connect("mongodb://localhost/globant", {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
  //   useCreateIndex: true
  // }).then(()=> console.log("Connected to the local db"));    
=======
  .catch((e) => console.log("DB NO CONNECT ERROR", e));

//BASE LOCAL DE PRUEBA
// mongoose.connect("mongodb://localhost/globant", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// }).then(()=> console.log("Connected to the local db"));
>>>>>>> f7e1783b5cb8d53a461fee8e09bb31cc0a74f566

module.exports = mongoose;
