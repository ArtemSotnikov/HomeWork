import express from "express";
import session from "express-session";
import passport from "passport";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
