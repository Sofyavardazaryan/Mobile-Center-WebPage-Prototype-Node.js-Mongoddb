const express = require("express");
const router = express.Router();
const productController =
  require("../controllers/productController");

router.get(
  "/products",
  productController.getProducts
);

router.get(
  "/products/:id",
  productController.getSingleProduct
);

module.exports = router;