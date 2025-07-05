import express from "express";
import session from "express-session";
import passport from "passport";
import {users} from "../data/users.js";
//import * as path from "node:path";
//import { fileURLToPath } from 'node:url';
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
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

app.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/login');
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
