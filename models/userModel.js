const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const User = Schema({
	firstname: String,
	lastname: String,
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	address: String,
	tel: Number,
	orderList: [
		{
			type: Schema.Types.ObjectId,
			ref: "Order",
		},
	],
});

//middleware que se ejecuta antes de guardar y hashea las passwords
//no funciona con arrow function!!
User.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, 10);

	next();
});
//busca un usuario y lo compara con la password que le llega
User.methods.comparePass = async function (password) {
	return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", User);
