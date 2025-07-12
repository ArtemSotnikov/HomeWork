import express from "express";
import session from "express-session";
import passport from "passport";
import {users} from "../data/users.js";
import passportLocal from "passport-local";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const LocalStrategy = passportLocal.Strategy;

const PORT = process.env.PORT || 4000;

const app = express();

const uri = process.env.MONGO_CONNECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName ='sample_mflix';

async function getUsersFromMDB() {
    const db = client.db(dbName);

    return await db.collection('users').find().limit(10).toArray();
}

async function getCollectionUsersFromMDB() {
    const db = client.db(dbName);

    return await db.collection("users");
}

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

app.get('/users', async (req, res) => {
        const users = await getUsersFromMDB();

        res.render('usersMDB', { users, title_page: 'Users' });
});

app.get('/add_user', async (req, res) => {
    res.render('addUser');
})

app.get('/add_users', async (req, res) => {
    res.render('addThreeUsers');
})

app.post('/add_user', async (req, res) => {
    const { name, email } = req.body;

    try {
        const users = await getCollectionUsersFromMDB();

        const result = await users.insertOne({name, email});
        console.log(`New user add to DB with ID: ${result.insertedId}`);

        res.render('addUser');
    } catch (error) {
        console.error('Error inserting user:', error);
    }
})

app.post('/add_users', async (req, res) => {
    const { name, email } = req.body;

    try {
        const users = await getCollectionUsersFromMDB();

        const names = Array.isArray(name) ? name : [name];
        const emails = Array.isArray(email) ? email : [email];

        const usersToAdd = names.map((n, i) => ({
            name: n,
            email: emails[i]
        }));

        const result = await users.insertMany(usersToAdd);
        console.log(`New users add to DB: ${result.insertedIds}`);

        res.render('addThreeUsers');
    } catch (error) {
        console.error('Error inserting users:', error);
    }
})

app.get('/update_user', async (req, res) => {
    res.render('updateUser');
})

app.get('/update_many_users', async (req, res) => {
    res.render('updateManyUsers');
})

app.post('/update_user', async (req, res) => {
    const { name, email } = req.body;

    try {
        const users = await getCollectionUsersFromMDB();

        const result = await users.updateOne({ name },{ $set: { email } });
        console.log(`Updated ${result.modifiedCount} users(s)`);

        res.render('updateUser');
    } catch (error) {
        console.error('Error updating user:', error);
    }
})

app.post('/update_many_users', async (req, res) => {
    const { email } = req.body;

    try {
        const users = await getCollectionUsersFromMDB();

        const result = await users.updateMany({ name: /^f/i }, { $set: { email } });

        console.log(`Updated ${result.modifiedCount} users(s).`);

        res.send(`<p>Updated ${result.modifiedCount} user(s) with new email.</p><a href="/users">Back to Users</a>`);
    } catch (error) {
        console.error("Error updating many users:", error);
    }
});

app.get('/replace_user', async (req, res) => {
    res.render('replaceUser');
})

app.post('/replace_user', async (req, res) => {
    const { name, name_new, email, password } = req.body;

    try {
        const users = await getCollectionUsersFromMDB();

        const result = await users.replaceOne({name}, { name: name_new, email, password });
        console.log(`Replaced ${result.modifiedCount} users(s)`);

        res.render('replaceUser');
    } catch (error) {
        console.error('Error replacing user:', error);
    }
})


app.get('/protected', checkAuthentication, (req, res) => {
    res.send(`Hello ${req.user.username}, welcome to the protected page!`);
});

app.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/login');
    });
});

async function connectAndStartServer() {
    try {
        await client.connect();
        console.log('Successfully connect to MongoDB Atlas');

        const db = client.db(dbName);

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


