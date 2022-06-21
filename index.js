require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;
console.log(port);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./models/db");
db();

app.listen(port, () => {
  console.log("Server running");
});
