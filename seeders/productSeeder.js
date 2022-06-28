const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

module.exports = async function getCategories() {
  const categories = await Category.find();
  console.log(categories);
  const products = [
    {
      name: "Coconut tart",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 100,
      image: "coconut-tart.jpg",
      stock: 200,
      trending: true,
      slug: "",
      category: categories[3],
    },
    {
      name: "Carrot cake",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 100,
      image: "carrot-cake.jpg",
      stock: 200,
      trending: true,
      slug: "",
      category: categories[0],
    },
    {
      name: "Strawberry tart",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 150,
      image: "strawberry-tart.jpg",
      stock: 200,
      trending: false,
      slug: "",
      category: categories[3],
    },
    {
      name: "Chocolate tart",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 100,
      image: "chocolate-tart.jpg",
      stock: 200,
      trending: false,
      slug: "",
      category: categories[3],
    },
    {
      name: "Orange truffle",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 85,
      image: "orange-truffle.jpg", //muy bonitas =)
      stock: 200,
      trending: false,
      slug: "",
      category: categories[1],
    },
    {
      name: "Cream cake",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 299,
      image: "cream-cake.jpg",
      stock: 200,
      trending: false,
      slug: "",
      category: categories[0],
    },
    {
      name: "Sponge cake",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 120,
      image: "sponge-cake.jpg",
      stock: 200,
      trending: true,
      slug: "",
      category: categories[0],
    },
    {
      name: "Éclair cup",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 120,
      image: "eclair-cup.jpg",
      stock: 200,
      trending: false,
      slug: "",
      category: categories[2],
    },
    {
      name: "Orange Twist",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 220,
      image: "orange-twist.jpg",
      stock: 200,
      trending: false,
      slug: "",
      category: categories[1],
    },
    {
      name: "Dacquoise",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 200,
      image: "dacquoise.jpg",
      stock: 200,
      trending: false,
      slug: "",
      category: categories[1],
    },
    {
      name: "Fruit Tart",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 200,
      image: "fruit-tart.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[3],
    },
    {
      name: "Match Tart",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 170,
      image: "matcha-tart.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[3],
    },
    {
      name: "Feuille",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 170,
      image: "feuille.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[0],
    },
    {
      name: "Kladdkaka",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 220,
      image: "kladdkaka.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[0],
    },
    {
      name: "Dariole",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 210,
      image: "dariole.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[0],
    },
    {
      name: "Tiramisu cup",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 180,
      image: "tiramisu-cup.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[2],
    },
    {
      name: "Fruit cup",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 180,
      image: "fruit-cup.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[2],
    },
    {
      name: "Mousse cup",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 180,
      image: "mousse-cup.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[2],
    },
  ];
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products have been created");
};
