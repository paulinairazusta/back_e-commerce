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

  await require("../seeders/userSeeder")();
  console.log("Los usuarios fueron creados");
};
