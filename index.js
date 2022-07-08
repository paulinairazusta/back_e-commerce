require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/routes");
const port = process.env.PORT;
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

routes(app);

app.listen(port, () => {
	console.log("Server running");
});
