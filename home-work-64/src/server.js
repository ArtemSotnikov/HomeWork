import express from "express";
import session from "express-session";
import passport from "passport";
import {users} from "../data/users.js";
import passportLocal from "passport-local";
import { MongoClient } from "mongodb";

const LocalStrategy = passportLocal.Strategy;

const PORT = process.env.PORT || 4000;

const app = express();

const uri = "mongodb+srv://artemsotnikov:xF9kcYtccIz4z9NF@cluster0.x6zyhdw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName ='sample_mflix';

async function connect(){
    try {
        await client.connect();
        console.log('Successfully connect to MongoDB Atlas');

        const db = client.db(dbName);

        const collections = await db.listCollections().toArray();
        console.log("Collection list:");
        collections.forEach((collection) => console.log(collection.name));
    } catch (err) {
        console.error('Fail to connect to MongoDB Atlas', err);
    }
}

connect();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 86400
    }
}));

app.use(passport.initialize());
app.use(passport.session());

function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

passport.use(new LocalStrategy(
    { usernameField: 'email', passwordField: 'password' },
    function(email, password, done) {
        const user = users.find(u => u.email === email);
        if (!user) {
            return done(null, false);
        }

        if (user.password !== password) {
            return done(null, false);
        }

        return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    const user = users.find(u => u.id === id);

    done(null, user);
});

app.get('/login', (req, res) => {
    const error = req.query.error ? 'Invalid email or password' : null;
    res.render('login', { error, title_page: 'Login' });
});

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login?error=1' }),
    function(req, res) {
        res.redirect('/');
    });

app.get('/', (req, res) => {
    res.send('Main page');
});

app.get('/protected', checkAuthentication, (req, res) => {
    res.send(`Hello ${req.user.username}, welcome to the protected page!`);
});

app.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/login');
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
