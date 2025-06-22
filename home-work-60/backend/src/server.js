import express from 'express';
import {articles} from "../data/articles.js";

const PORT = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');

app.get('/articles', (req, res) => {
    res.json(articles);
});

app.get('/articles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const article = articles.find(article => article.id === id);
    if (!article) {
        res.status(404).send('No article found with id ' + id);
    } else {
        res.status(200).send(article);
    }
})

app.get('/', function (req, res) {
    const data = { title_page: 'Main', title_article: 'Test!', content: 'Article content' };
    res.render('page', data);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

