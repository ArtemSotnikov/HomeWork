import express from "express";
import session from "express-session";
import passport from "passport";
import {users} from "../data/users.js";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;


const PORT = process.env.PORT || 4000;

const app = express();

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
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


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
