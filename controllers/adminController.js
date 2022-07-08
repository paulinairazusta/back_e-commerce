const Admin = require("../models/adminModel.js");
const jwt = require("jsonwebtoken");

const adminController = {
	getAllAdmins: async (req, res) => {
		const admins = await Admin.find();
		res.send(admins);
	},
	register: async (req, res) => {
		const admin = await Admin.findOne({ email: req.body.email });
		if (!admin) {
			await Admin.create({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				email: req.body.email,
				password: req.body.password,
				isAdmin: false,
			});
			res.send("Usuario registrado!");
		} else {
			res.send("Este usuario ya existe!");
		}
	},
	login: async (req, res) => {
		try {
			const admin = await Admin.findOne({ email: req.body.email.email });
			const result = await admin.comparePass(req.body.password.password);

			if (admin && result) {
				const adminEmail = admin.email;
				jwt.sign(adminEmail, process.env.SECRET, (err, token) => {
					res.json({
						accesToken: token,
						admin: {
							firstname: admin.firstname,
							lastname: admin.lastname,
							email: admin.email,
						},
					});
				});
			} else {
				res.json({ mensaje: "Credenciales incorrectas" });
			}
		} catch (error) {
			res.json({ mensaje: "Credenciales incorrectas" });
		}
	},
	deleteAdmin: async (req, res) => {
		try {
			await Admin.findByIdAndDelete({ _id: req.params.id });
			res.send("Admin deleted");
		} catch (error) {
			res.send(error);
		}
	},
};

module.exports = adminController;
