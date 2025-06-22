import express from 'express';

const PORT = process.env.PORT || 4000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const data = { title: 'Main', message: 'Test!', content: 'Article content' };
    res.render('page', data);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

