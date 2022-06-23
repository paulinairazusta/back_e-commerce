const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.connect(process.env.CONNECTION_DB);

  // mongoose.connection
  //   .once("open", () => {
  //     console.log("Conexión establecida");
  //   })
  //   .on("error", (error) => {
  //     console.log(error);
  //   });

  await require("../seeders/userSeeder"); // poner "()" al final para volver a crear los datos.
  await require("../seeders/categorySeeder"); //();
  await require("../seeders/productSeeder"); //();
};
