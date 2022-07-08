const express = require("express");
const dataBaseRouter = express.Router();

dataBaseRouter.post("/reset", async (req, res) => {
	await require("../seeders/userSeeder")();
	await require("../seeders/categorySeeder")();
	await require("../seeders/productSeeder")();
	await require("../seeders/adminSeeder")();
	res.send("done");
});

module.exports = dataBaseRouter;
