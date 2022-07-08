require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/routes");
const port = process.env.PORT;
const cors = require("cors");
const db = require("./models/db");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routes(app);
db();
app.listen(port, () => {
	console.log("Server running");
});
