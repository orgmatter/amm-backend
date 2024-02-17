const express = require("express");
const app = express.Router();
const bodyParser = require("body-parser")
const routeApi = require("./routes");

app.use("/", routeApi);
