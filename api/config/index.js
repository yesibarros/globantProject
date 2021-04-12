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
  .catch((e) => console.log("DB NO CONNECT ERROR", e)); 
  
//BASE LOCAL DE PRUEBA
/* mongoose.connect(`mongodb://localhost/globant`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=> console.log("Connected to the local db")); */

module.exports = mongoose;
