const { ObjectId } = require("mongodb");
const { getDB } = require("../db/db");

async function getAllProducts() {
  const db = getDB();

  return await db.collection("products").find().toArray();
}

async function getProductById(id) {
  const db = getDB();

  return await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });
}

async function createProduct(product) {
  const db = getDB();

  return await db.collection("products").insertOne(product);
}

async function updateProduct(id, product) {
  const db = getDB();

  return await db.collection("products").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: product,
    }
  );
}

async function deleteProduct(id) {
  const db = getDB();

  return await db
    .collection("products")
    .deleteOne({ _id: new ObjectId(id) });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
