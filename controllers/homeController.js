const Product = require("../models/productModel");

exports.getHomePage = async (req, res) => {
  try {
    const products = await Product.getAllProducts();

    const featured = products && products.length > 0 ? products[0] : null;

    res.render("index", {
      products: products || [],
      featured: featured,
    });
  } catch (error) {
    console.error("Home error:", error);

    res.render("index", {
      products: [],
      featured: null,
    });
  }
};
