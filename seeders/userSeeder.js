const User = require("../models/userModel");
const users = [
  {
    firstname: "Juan",
    lastname: "Pérez",
    email: "juanperez@user.com",
    password: "123123",
    address: "La Gaceta",
    tel: 098,
    orderList: [],
  },
  {
    firstname: "María",
    lastname: "López",
    email: "marialopez@user.com",
    password: "123123",
    address: "18 de julio",
    tel: 091,
    orderList: [],
  },
  {
    firstname: "Rafita",
    lastname: "Moure",
    email: "rafitamoure@user.com",
    password: "123123",
    address: "Colonia",
    tel: 094,
    orderList: [],
  },
  {
    firstname: "Juana",
    lastname: "Jiménez",
    email: "juanajimenez@user.com",
    password: "123213",
    address: "Mercedes",
    tel: 098,
    orderList: [],
  },
  {
    firstname: "Marta",
    lastname: "Sánchez",
    email: "martasanchez@user.com",
    password: "123123",
    address: "Guaná",
    tel: 099,
    orderList: [],
  },
];

module.exports = async () => {
  await User.deleteMany({});
  await User.insertMany(users);
  console.log("hola");
};
