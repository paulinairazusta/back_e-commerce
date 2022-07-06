const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const slugify = require("slugify");

module.exports = async function getCategories() {
	const categories = await Category.find();
	const products = [
		{
			name: "Coconut tart",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 100,
			image: "images/coconut-tart.jpg",
			stock: 200,
			available: true,
			featured: true,
			slug: "",
			category: categories[3],
		},
		{
			name: "Carrot cake",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 100,
			image: "images/carrot-cake.jpg",
			stock: 200,
			available: true,
			featured: true,
			slug: "",
			category: categories[0],
		},
		{
			name: "Strawberry tart",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 150,
			image: "images/strawberry-tart.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[3],
		},
		{
			name: "Chocolate tart",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 100,
			image: "images/chocolate-tart.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[3],
		},
		{
			name: "Orange truffle",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 85,
			image: "images/orange-truffle.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[1],
		},
		{
			name: "Cream cake",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 299,
			image: "images/cream-cake.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[0],
		},
		{
			name: "Sponge cake",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 120,
			image: "images/sponge-cake.jpg",
			stock: 200,
			available: true,
			featured: true,
			slug: "",
			category: categories[0],
		},
		{
			name: "Éclair cup",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 120,
			image: "images/eclair-cup.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[2],
		},
		{
			name: "Orange Twist",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 220,
			image: "images/orange-twist.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[1],
		},
		{
			name: "Dacquoise",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 200,
			image: "images/dacquoise.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[1],
		},
		{
			name: "Fruit Tart",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 200,
			image: "images/fruit-tart.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[3],
		},
		{
			name: "Match Tart",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 170,
			image: "images/matcha-tart.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[3],
		},
		{
			name: "Feuille",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 170,
			image: "images/feuille.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[0],
		},
		{
			name: "Kladdkaka",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 220,
			image: "images/kladdkaka.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[0],
		},
		{
			name: "Dariole",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 210,
			image: "images/dariole.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[0],
		},
		{
			name: "Tiramisu cup",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 180,
			image: "images/tiramisu-cup.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[2],
		},
		{
			name: "Fruit cup",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 180,
			image: "images/fruit-cup.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[2],
		},
		{
			name: "Mousse cup",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 180,
			image: "images/mousse-cup.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[2],
		},
		{
			name: "Cheesecake",
			description:
				"Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
			price: 180,
			image: "images/cheesecake.jpg",
			stock: 200,
			available: true,
			featured: false,
			slug: "",
			category: categories[0],
		},
	];
	await Product.deleteMany({});
	await Product.insertMany(products);
	async function createSlugs() {
		const createdProducts = await Product.find();
		for (product of createdProducts) {
			product.slug = slugify(product.name, { lower: true });
			await product.save();
		}
	}
	createSlugs();
	console.log("Products have been created");
};
