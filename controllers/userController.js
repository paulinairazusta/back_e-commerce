const User = require("../models/userModel");

const userController = {
	register: async (req, res) => {
		await User.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password,
			address: req.body.address,
			tel: req.body.tel,
			orderList: [],
		});
		res.send("usuario registrado!");
	},
	getAllUsers: async (req, res) => {
		const users = await User.find();
		res.send(users);
	},
	getUserById: async (req, res) => {
		const user = await User.findById(req.params.id);

		res.send(user);
	},
	//TODO: Al loguearse hay que mandar el token!!!
	login: async (req, res) => {
		const user = await User.findOne({ email: req.body.email });

		const result = await user.comparePass(req.body.password);
	},
};

module.exports = userController;
