const Product = require("../models/productModel");
const slugify = require("slugify");
const formidable = require("formidable");
// const axios = require("axios");

const productController = {
	getAllProducts: async (req, res) => {
		const products = await Product.find().populate("category");

		res.send(products);
	},
	getProductBySlug: async (req, res) => {
		const product = await Product.findOne({ slug: req.params.slug }).populate(
			"category"
		);
		res.send(product);
	},
	createProduct: (req, res, next) => {
		const form = formidable({
			multiples: true,
			uploadDir: __dirname + "/../public/images",
			keepExtensions: true,
		});

		form.parse(req, async (err, fields, files) => {
			if (err) {
				next(err);
				return;
			}
			// await axios.post(
			// 	"https://tkyarzymrutnhhccfvhu.supabase.co",
			// 	{
			// 		headers: {
			// 			Authorization:
			// 				"Bearer " +
			// 				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRreWFyenltcnV0bmhoY2Nmdmh1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1Njk1MzQxOSwiZXhwIjoxOTcyNTI5NDE5fQ.-Wm_cvjKNxKs272HnmvdEzGfgNmRWknVNPYmi-Fw9z4",
			// 		},
			// 	},
			// 	{
			// 		image: files.image.originalFilename,
			// 	}
			// );
			await Product.create({
				name: fields.name,
				description: fields.description,
				price: fields.price,
				image: files.image.originalFilename,
				destacado: fields.destacado,
				slug: slugify(fields.name, { lower: true }),
				category: fields.category, //Hay que pasarle el id de la categoria!!
			});
		});

		res.send("producto agregado!");
	},
	//Entra aca cuando se hace checkout en el carrito
	productSold: async (req, res) => {
		res.send("exitoo");
	},
	productAvailable: async (req, res) => {
		const mipro = await Product.updateOne(
			{ _id: req.params._id },
			{ available: !available }
		);
		console.log(mipro.available);
	},
};

module.exports = productController;
