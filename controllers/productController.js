const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts();

    return res.render("index", {
      products,
      error: null,
    });
  } catch (err) {
    console.error("Failed to load products:", err);

    return res.render("index", {
      products: [],
      error: "Failed to load products",
    });
  }
};