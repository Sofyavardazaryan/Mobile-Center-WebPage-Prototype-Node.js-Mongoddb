const { MongoClient } = require("mongodb");

const URL = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

let db;

async function connectDB() {

    if (!db) {

        const client = await MongoClient.connect(URL);

        db = client.db(DB_NAME);

        console.log("Mongo Connected");
    }

    return db;
}

async function getProducts() {

    const database = await connectDB();

    return await database
        .collection("products")
        .find({})
        .toArray();
}

module.exports = {
    getProducts
};