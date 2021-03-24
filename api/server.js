require("./config");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());
app.use(morgan("dev"));

app.use("/api", routes);

//hacer middleware de error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(404).send(err);
  });

app.listen(5000, () => {
    console.log("puerto levantado")
})