# Simple Server on Express with connection to MongodDB and CRUD functionality with Passport authentication (from local file)

This is a Node.js/Express server application with  CRUD (Create, Read, Update, Delete) functionality using MongoDB Atlas as the database. The application features user session authentication, user management routes, and server-side rendering with EJS templates.

Main features:

- Connection and fetching users data from MongoDB Atlas
- Add, update, replace, and delete single or multiple users
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
│    └── server.js    
├── views/   
│    ├── addThreeUsers.ejs
│    ├── addUser.ejs
│    ├── deleteManyUsers.ejs
│    ├── deleteUser.ejs
│    ├── login.ejs
│    ├── replaceUser.ejs
│    ├── updateManyUsers.ejs
│    ├── updateUser.ejs
│    ├── usersMDB.ejs
│    └── usersProjection.ejs      
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
MONGO_CONNECTION=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
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

/users	 ----> GET fetch 10 users from MonngoDB Atlas and render them.

/login	 ----> GET login page with user email and passwort, if incorrect credentials are submitted, shows an error message

/login	 ----> POST handles login with email and password using Passport.js

/add_user	 ----> GET add new user page

/add_user	 ----> POST handles insertion of new user with name and email

/add_users	 ----> GET add new 3 users page

/add_user	 ----> POST handles insertion of 3 new users with names and emails

/update_user	 ----> GET update one user email  page

/update_user	 ----> POST handles update of email of one user chosen by name 

/update_many_users	 ----> GET update emails for users with name starting with "f" page

/update_many_users	 ----> POST handles update of email of all users with name starting with "f" 

/replace_user	 ----> GET replace one page

/replace_user	 ----> POST handles replace of one user chosen by name with new user with fields: name, email, passwor 

/delete_user	 ----> GET delete one user page

/delete_user	 ----> POST handles delete of one user chosen by name 

/delete_users	 ----> GET delete users with name starting with "f" page

/delete_users	 ----> POST handles delete of all users with name starting with "f" 

/login	 ----> GET login page with user email and passwort, if incorrect credentials are submitted, shows an error message

/login	 ----> POST handles login with email and password using Passport.js

/	 ----> GET home page, which has no restrictions

/protected  ----> GET protected page, accessible only for loged in users

/logout ----> GET	logs the user out


## Local User Data

Local users with access to the server are stored in data/users.js as an array of objects.


## EJS Template

The views are used for rendering pages via EJS.
