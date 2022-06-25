const mongoose = require("mongoose");

module.exports = async () => {
	mongoose.connect(process.env.CONNECTION_DB);

	await require("../seeders/userSeeder")(); // poner "()" al final para volver a crear los datos.
	await require("../seeders/categorySeeder"); //();
	await require("../seeders/productSeeder"); //();
};
