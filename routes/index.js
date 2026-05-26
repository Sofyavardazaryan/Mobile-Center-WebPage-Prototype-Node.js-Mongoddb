const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");

router.get("/", async (req, res) => {
  try {
    const products = await Product.getAllProducts();

    const featured = products.length > 0 ? products[0] : null;

    res.render("index", {
      products,
      featured,
    });
  } catch (err) {
    console.error(err);

    res.render("index", {
      products: [],
      featured: null,
    });
  }
});

module.exports = router;
