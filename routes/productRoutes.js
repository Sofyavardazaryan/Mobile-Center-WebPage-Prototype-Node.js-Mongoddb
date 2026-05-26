const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");

router.get("/", async (req, res) => {
  try {
    const products = await Product.getAllProducts();

    res.render("products", {
      products: products || [],
    });
  } catch (err) {
    console.error(err);

    res.render("products", {
      products: [],
    });
  }
});

module.exports = router;
