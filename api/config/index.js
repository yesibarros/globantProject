// CONFIG
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://globant:globant@globant.7ahj7.mongodb.net/globant?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB CONNECT!!"))
  .catch((e) => console.log("DB NO CONNECT ERROR"));

