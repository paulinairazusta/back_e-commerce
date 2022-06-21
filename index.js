require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;
console.log(port);

const connection = require("./models/db");
connection();

app.listen(port, () => {
  console.log("Server running");
});
