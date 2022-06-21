const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

const culo = async function getCategories() {
  const categories = await Category.find();
  console.log(categories);
  const products = [
    {
      name: "Coconut tart",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 100,
      image: "../public/images/coconut-tart.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[3],
    },
    {
      name: "Carrot cake",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 100,
      image: "../public/images/carrot.jpg",
      stock: 200,
      destacado: true,
      slug: "",
      category: categories[0],
    },
    {
      name: "Strawberry tart",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 150,
      image: "../public/images/strawberry-tart.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[3],
    },
    {
      name: "Chocolate tart",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 100,
      image: "../public/images/chocolate-tart.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[3],
    },
    {
      name: "Orange truffle",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 85,
      image: "../public/images/organe-truffle.jpg",
      stock: 200,
      destacado: true,
      slug: "",
      category: categories[1],
    },
    {
      name: "Cream cake",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 299,
      image: "../public/images/cream-cake.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[0],
    },
    {
      name: "Sponge cake",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 120,
      image: "../public/images/sponge-cake.jpg",
      stock: 200,
      destacado: false,
      slug: "",
      category: categories[0],
    },
    {
      name: "Éclair cup",
      description:
        "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
      price: 120,
      image: "../public/images/eclair-cup.jpg",
      stock: 200,
      destacado: true,
      slug: "",
      category: categories[2],
    },
  ];
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Products have been created");
};

module.exports = culo;
