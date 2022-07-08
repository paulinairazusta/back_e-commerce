const adminRoutes = require("./adminRoutes");
const categoryRoutes = require("./categoryRoutes.js");
const dataBaseRouter = require("./dataBaseRoute");
const orderRoutes = require("./orderRoutes");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
	app.use(adminRoutes);
	app.use(categoryRoutes);
	app.use(orderRoutes);
	app.use(productRoutes);
	app.use(userRoutes);
	app.use(dataBaseRouter);
};
