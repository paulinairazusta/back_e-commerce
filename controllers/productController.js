const Product = require("../models/productModel");
const slugify = require("slugify");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
	process.env.SUPABASE_URL,
	process.env.SUPABASE_KEY
);
const path = require("path");
const fs = require("fs");

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
			keepExtensions: true,
		});

		form.parse(req, async (err, fields, files) => {
			if (err) {
				next(err);
				return;
			}
			const ext = path.extname(files.image.filepath);
			const newFileName = `image_${Date.now()}${ext}`;

			const { data, error } = await supabase.storage
				.from("images")
				.upload(newFileName, fs.createReadStream(files.image.filepath), {
					cacheControl: "3600",
					upsert: false,
					contentType: files.image.mimetype,
				});
			console.log(data);
			await Product.create({
				name: fields.name,
				description: fields.description,
				price: fields.price,
				image: data.Key,
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
