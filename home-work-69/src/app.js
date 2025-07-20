import dotenv from 'dotenv';
import passportLocal from "passport-local";
import express from "express";
import mongoose from 'mongoose';
import session from "express-session";
import passport from "passport";
import {users} from "../data/users.js";
import User from './models/User.js'


dotenv.config();

const LocalStrategy = passportLocal.Strategy;

const PORT = process.env.PORT || 4000;
const app = express();
const URI = process.env.MONGO_CONNECTION;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(session({
    secret: process.env.SESSION_SECRET,
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

function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.get('/login', (req, res) => {
    const error = req.query.error ? 'Invalid email or password' : null;
    res.render('login', { error, title_page: 'Login' });
});

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login?error=1' }),
    function(req, res) {
        res.redirect('/');
    });

app.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/login');
    });
});

app.get('/protected', checkAuthentication, (req, res) => {
    res.send(`Hello ${req.user.username}, welcome to the protected page!`);
});

app.get('/', (req, res) => {
    res.send('Main page');
});

async function getUsersFromMDB() {
    return await User.find().limit(10);
}

app.get('/users', async (req, res) => {
    const users = await getUsersFromMDB();
    console.log(users);

    res.render('usersMDB', { users, title_page: 'Users' });
});

async function connectAndStartServer() {
    try {
        await mongoose.connect(URI);
        console.log('Successfully connect to MongoDB Atlas');

        const db = mongoose.connection.db;
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