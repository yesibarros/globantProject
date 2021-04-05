require('dotenv').config()
const {SERVER_PORT} = process.env
require("./config");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
module.exports = app //para los tests
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));

app.use("/api", routes);

//middleware de error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(404).send(err);
  });

if (!module.parent){//para los tests
  app.listen(SERVER_PORT, () => {
      console.log(`Server listening on port ${SERVER_PORT}`)
})}