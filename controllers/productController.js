const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {

  const products =
    await Product.getAllProducts();

  res.render("products", {
    products,
  });

};

exports.getSingleProduct = async (req, res) => {

  const product =
    await Product.getProductById(
      req.params.id
    );

  res.render("product-details", {
    product,
  });

};