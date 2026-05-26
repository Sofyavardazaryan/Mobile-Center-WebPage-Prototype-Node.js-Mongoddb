const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts();

    res.render("index", {
      products,
      error: null,
    });
  } catch (err) {
    console.error("Failed to load products:", {
      message: err.message,
      stack: err.stack,
    });

    res.render("index", {
      products: [],
      error: "Unable to load products. Please try again later.",
    });
  }
};
