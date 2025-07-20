# Simple Server on Express with connection to MongodDB via mongoose with Passport authentication (from local file)

This project is a Node.js web application that demonstrates connection to **MongoDB Atlas** via **mongoose** schema. The project includes **Passport.js** with the **Local Strategy** (email and password) from local user file . It also has **session management** using `express-session`, and restricts access to a protected route.

Main features:

- Connection and fetching users data from MongoDB Atlas via `mongoose` schema
- User login with email and password (`/login`) 
- Authentication using Passport.js
- Session management with `express-session`
- Protected route (`/protected`) for authenticated users
- Logout (`/logout`)
- Error on failed login attempt
- Rendering login page using EJS templates

## Project Structure
```
HomeWork/home-work-64  
├── data/    
│    ├── users.js    
├── src/
│    ├── models/    
│    │     └── User.js     
│    └── app.js    
├── views/   
│    ├── login.ejs
│    └── usersMDB.js      
├── .gitignore     
├── package.json     
├── package-lock.json     
└── README.md     
```

## Getting Started

Install dependencies:

`npm install`

Create **.env** file in the root of the project with the following structure:
```
PORT=4000
MONGO_CONNECTION=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/sample_mflix?retryWrites=true&w=majority
SESSION_SECRET=your-secret-key
```

Start the server:

`npm start`

Open the app in your browser:

`http://localhost:4000`

Command	description:

`npm start`	starts the server using nodemon for auto-reload

## Routes
Route	method description:

/users	 ----> GET fetch 10 users from MonngoDB Atlas via mongoose schema and render them.

/login	 ----> GET login page with user email and passwort, if incorrect credentials are submitted, shows an error message

/login	 ----> POST handles login with email and password using Passport.js

/	 ----> GET home page, which has no restrictions

/protected  ----> GET protected page, accessible only for loged in users

/logout ----> GET	logs the user out

## User mongoose schema

Define structure of documents in "users" collection in src/models/User.

## Local User Data

Local users with access to the server are stored in data/users.js as an array of objects.


## EJS Template

The views/login is used for rendering login and users pages via EJS.
