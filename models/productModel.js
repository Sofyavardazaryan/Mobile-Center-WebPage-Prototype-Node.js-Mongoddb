const { MongoClient } = require("mongodb");

const URL = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

let client;
let db;

async function connectDB() {
  if (!db) {
    client = await MongoClient.connect(URL);
    db = client.db(DB_NAME);
  }
  return db;
}

async function getAllProducts() {
  const database = await connectDB();

  return await database.collection("products").find({}).toArray();
}

module.exports = {
  getAllProducts,
};
