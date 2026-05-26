const { MongoClient } = require("mongodb");
require("dotenv").config();

const URL = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

let client;
let db;

async function connectDB() {
  try {
    if (db) return db; // already connected

    client = new MongoClient(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    db = client.db(DB_NAME);

    console.log("MongoDB Connected:", DB_NAME);

    return db;
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
}

function getDB() {
  if (!db) {
    throw new Error("DB not initialized. Call connectDB() first.");
  }
  return db;
}

async function closeDB() {
  if (client) {
    await client.close();
    db = null;
    client = null;
    console.log("MongoDB Disconnected");
  }
}

module.exports = {
  connectDB,
  getDB,
  closeDB,
};