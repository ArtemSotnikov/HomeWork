# Simple Server on Express with Passport authentication

This project is a Node.js web application that demonstrates **user authentication** using **Passport.js** with the **Local Strategy** (email and password). It also has **session management** using `express-session`, and restricts access to a protected route.

Main features:

- User login with email and password (`/login`) 
- Authentication using Passport.js
- Session management with `express-session`
- Protected route (`/protected`) for authenticated users
- Logout (`/logout`)
- Error on failed login attempt
- Rendering login page using EJS templates

## Project Structure
```
HomeWork/home-work-63  
├── data/    
│    ├── users.js     
├── src/    
│    └── server.js    
├── views/   
│    ├── login.ejs     
├── .gitignore     
├── package.json     
├── package-lock.json     
└── README.md     
```

## Getting Started

Install dependencies:

`npm install`

Start the server:

`npm start`

Open the app in your browser:

`http://localhost:4000`

Command	description:

`npm start`	starts the server using nodemon for auto-reload

## Routes
Route	method description:

/login	 ----> GET login page with user email and passwort, If incorrect credentials are submitted, shows an error message

/login	 ----> POST handles login with email and password using Passport.js

/	 ----> GET home page, which has no restrictions

/protected  ----> GET protected page, accessible only for loged in users

/logout ----> GET	logs the user out


## User Data

Users are stored in data/users.js as an array of objects.


## EJS Template

The views/login is used for rendering login page via EJS.
