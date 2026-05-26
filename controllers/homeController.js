const Product = require("../models/productModel");

exports.getHomePage = async (req, res) => {

  const products =
    await Product.getAllProducts();

  res.render("index", {
    products,
  });

};