const User = require("../models/userModel");
const users = [
	{
		firstname: "Juan",
		lastname: "Pérez",
		email: "juanperez@user.com",
		password: "1234",
		address: "La Gaceta",
		tel: 098,
		orderList: [],
	},
	{
		firstname: "María",
		lastname: "López",
		email: "marialopez@user.com",
		password: "1234",
		address: "18 de julio",
		tel: 091,
		orderList: [],
	},
	{
		firstname: "Rafita",
		lastname: "Moure",
		email: "rafitamoure@user.com",
		password: "1234",
		address: "Colonia",
		tel: 094,
		orderList: [],
	},
	{
		firstname: "Juana",
		lastname: "Jiménez",
		email: "juanajimenez@user.com",
		password: "1234",
		address: "Mercedes",
		tel: 098,
		orderList: [],
	},
	{
		firstname: "Marta",
		lastname: "Sánchez",
		email: "martasanchez@user.com",
		password: "1234",
		address: "Guaná",
		tel: 099,
		orderList: [],
	},
	{
		firstname: "Alonzo",
		lastname: "Pereira",
		email: "alonzopereira@user.com",
		password: "1234",
		address: "18 de julio",
		tel: 099338866,
		orderList: [],
	},
];
module.exports = async () => {
	await User.deleteMany({});

	for (let i = 0; i < users.length; i++) {
		const firstname = users[i].firstname;
		const lastname = users[i].lastName;
		const email = users[i].email;
		const password = users[i].password;
		const address = users[i].address;
		const tel = users[i].tel;
		const orderList = users[i].orderList;
		const user = new User({
			firstname,
			lastname,
			email,
			password,
			address,
			tel,
			orderList,
		});
		await user.save();
	}
	console.log("Usuarios creados!");
};
