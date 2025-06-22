import express from 'express';
import {articles} from "../data/articles.js";

const PORT = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.send('<a href="/articles">Go to Articles</a>');
})

app.get('/articles', (req, res) => {
    res.send(articles.map(article => {
        return `<li><a href="/articles/${article.id}">${article.title}</a></li>`;
    }).join(''));
});

app.get('/articles/:id', function (req, res)  {
    const id = parseInt(req.params.id);
    const article = articles.find(article => article.id === id);
    
    if (!article) {
        res.status(404).send('No article found with id ' + id);
    } else {
        const data = { title_page: "Article " + article.id, title_article: article.title, content: article.text };
        res.render('page', data);
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

