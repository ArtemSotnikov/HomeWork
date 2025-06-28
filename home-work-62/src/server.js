import express from 'express';
import {articles} from "../data/articles.js";
import * as path from "node:path";
import { fileURLToPath } from 'node:url';
import cookieParser from "cookie-parser";
import session from "express-session";
import {users} from "../data/users.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Check if user is logged in
function authMiddleware(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

app.get('/set-cookie/:theme', (req, res) => {
    const theme = req.params.theme;
    if (!['light', 'dark'].includes(theme)) {
        return res.status(400).send('Invalid theme');
    }
    res.cookie('theme', theme, { maxAge: 86400, httpOnly: true });
    res.send(`Theme is set to ${theme}`);
});

app.get('/login', (req, res) => {
    const theme = req.cookies.theme || 'light';
    res.render('login', { error: null,  theme, title_page: 'Login' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    const theme = req.cookies.theme || 'light';
    if (user) {
        req.session.user = user;
        res.redirect('/');
    } else {
        res.render('login', { error: 'Invalid username or password',  theme, title_page: 'Login' });
    }
});

app.get('/', authMiddleware, (req, res) => {
    const theme = req.cookies.theme || 'light';
    res.render('main', {
        title_page: 'home',
        title: 'Home Page',
        text: 'Go to Articles',
        theme
    });
})

app.get('/articles', authMiddleware,  (req, res) => {
    const theme = req.cookies.theme || 'light';
    res.render('articles', {
        title_page: 'articles',
        title: 'Articles',
        articles,
        theme
    });
})

app.get('/articles/:id', authMiddleware,  function (req, res)  {
    const id = parseInt(req.params.id);
    const article = articles.find(article => article.id === id);
    const theme = req.cookies.theme || 'light';

    if (!article) {
        res.status(404).send('No article found with id ' + id);
    } else {
        const data = { title_page: "Article " + article.id, title_article: article.title, content: article.text, author: article.author, theme };
        res.render('page', data);
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

