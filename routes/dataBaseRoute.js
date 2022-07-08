const express = require("express");
const dataBaseRouter = express.Router();
const db = require("../models/db");

dataBaseRouter.post("/reset", (req, res) => {
	db();
});

module.exports = dataBaseRouter;
