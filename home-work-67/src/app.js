import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();


app.get('/', (req, res) => {
    res.send('Main page Test');
});

async function connectAndStartServer() {
    try {
        await client.connect();
        const db = client.db("testDB"); // use any name you want
        console.log("Successfully connect to MongoDB");

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

connectAndStartServer();

