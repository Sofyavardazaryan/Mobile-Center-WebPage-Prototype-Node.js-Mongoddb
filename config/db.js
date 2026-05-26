const { MongoClient } = require("mongodb");
require("dotenv").config();

const URL = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

if (!URL) {
  throw new Error("MONGO_URI is not defined in .env");
}

if (!DB_NAME) {
  throw new Error("DB_NAME is not defined in .env");
}

let client;
let db;
let connectPromise;

async function connectDB() {
  try {
    if (db) return db;
    if (!connectPromise) {
      client = new MongoClient(URL);
      connectPromise = client.connect().then((connectedClient) => {
        db = connectedClient.db(DB_NAME);
        console.log("MongoDB Connected:", DB_NAME);
        return db;
      });
    }

    return await connectPromise;
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
    connectPromise = null;
    console.log("MongoDB Disconnected");
  }
}

module.exports = {
  connectDB,
  getDB,
  closeDB,
};
