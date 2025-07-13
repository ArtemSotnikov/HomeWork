import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');

const uri = process.env.MONGO_CONNECTION;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName ='sample_mflix';

async function getCollectionMoviesFromMDB() {
    return client.db(dbName).collection("movies");
}

async function connectAndStartServer() {
    try {
        await client.connect();
        console.log('Successfully connect to MongoDB Atlas');

        const db = client.db(dbName);

        const collections = await db.listCollections().toArray();
        console.log("Collection list:");
        collections.forEach((collection) => console.log(collection.name));

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

connectAndStartServer();

app.get('/movies', async (req, res) => {
    try {
        const moviesCollection = await getCollectionMoviesFromMDB();

        const { title, year, genre, castMember, imdbRating, page = 1 } = req.query;

        const query = {};

        if (title) {
            query.title = { $regex: title, $options: 'i' };
        }

        if (year) {
            query.year = parseInt(year);
        }

        if (genre) {
            query.genres = genre;
        }

        if (castMember) {
            query.cast = { $regex: castMember, $options: 'i' };
        }

        if (imdbRating) {
            query["imdb.rating"] = { $gt: parseFloat(imdbRating) };
        }

        const limit = 10;
        const currentPage = parseInt(page);

        const moviesList = await moviesCollection.find(query).
            skip((currentPage - 1) * limit).limit(limit).toArray();

        const hasNextPage = moviesList.length === limit;

        res.render('movies', { movies: moviesList, query: req.query, currentPage, hasNextPage  } );
    } catch (error) {
        console.error("Error occurred by fetching movies:", error);
    }


})
