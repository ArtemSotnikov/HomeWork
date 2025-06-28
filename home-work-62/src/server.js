import express from 'express';
import {articles} from "../data/articles.js";
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('main', {
        title_page: 'home',
        title: 'Home Page',
        text: 'Go to Articles'
    });
})

app.get('/articles', (req, res) => {
    res.render('articles', {
        title_page: 'articles',
        title: 'Articles',
        articles
    });
})

app.get('/articles/:id', function (req, res)  {
    const id = parseInt(req.params.id);
    const article = articles.find(article => article.id === id);

    if (!article) {
        res.status(404).send('No article found with id ' + id);
    } else {
        const data = { title_page: "Article " + article.id, title_article: article.title, content: article.text, author: article.author };
        res.render('page', data);
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

