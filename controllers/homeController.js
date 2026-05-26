const Product = require("../models/productModel");

exports.getHomePage = async (req, res) => {
  try {
    const products = await Product.getAllProducts();

    res.render("index", {
      products: products || [],
    });
  } catch (error) {
    console.error("Error loading homepage:", error);

    res.status(500).send("Server Error");
  }
};