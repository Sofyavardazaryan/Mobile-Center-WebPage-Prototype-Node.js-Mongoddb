const { MongoClient } = require("mongodb");

const URL = process.env.MONGO_URI;

let db;

async function connectDB() {
  try {
    const client = await MongoClient.connect(URL);

    db = client.db(process.env.DB_NAME);

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
}

function getDB() {
  return db;
}

module.exports = {
  connectDB,
  getDB,
};