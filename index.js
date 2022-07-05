require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/routes");
const port = process.env.PORT;
const cors = require("cors");
const { expressjwt: checkJwt } = require("express-jwt");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(checkJwt({ secret: process.env.API_SECRET, algorithms: ["HS256"] }));

routes(app);

const db = require("./models/db");
db();

app.listen(port, () => {
  console.log("Server running");
});
