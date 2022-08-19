const express = require("express");
const dataBaseRouter = express.Router();

dataBaseRouter.post("/reset", async (req, res) => {
  await require("../seeders/userSeeder")();
  await require("../seeders/categorySeeder")();
  await require("../seeders/productSeeder")();
  await require("../seeders/adminSeeder")();
  await require("../seeders/orderSeeder")();
  res.json({ message: "Database reset" });
});

module.exports = dataBaseRouter;
