// CONFIG
const mongoose = require("mongoose");

//MONGO ATLAS
mongoose
  .connect(
    "mongodb+srv://globant:globant@globant.7ahj7.mongodb.net/globant?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB CONNECT!!"))
  .catch((e) => console.log("DB NO CONNECT ERROR"));  


  //BASE LOCAL DE PRUEBA
 /*  mongoose.connect("mongodb://localhost/pruebaGlobant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });  */
  
  
  module.exports = mongoose;