require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const router = require("./routes/routes");
app.use("/", router);

const db = require("./models/db");
db();

app.listen(port, () => {
	console.log("Server running");
});
