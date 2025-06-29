# Simple Server with Articles on Express and EJS

This project implements a basic server using Node.js with Express and EJS. The server provides REST-style routes for working with a collection of articles.

Main features:

- Rendering pages using EJS templates
- Managing cookies to store the user's theme preference
- Basic user authentication using `express-session`
- Protected routes requiring login
- Serving static files (including favicon and css styles)

## Project Structure
```
HomeWork/home-work-62  
├── data/    
│    ├── articles.js    
│    └── users.js   
├── public/    
│    ├── icons/  
│    │    ├── favicon_article.png   
│    │    ├── favicon_articles.png    
│    │    └── favicon_main.png  
│    └── styles/  
│         └── styles.css   
├── src/    
│    └── server.js    
├── views/  
│    ├── articles.ejs  
│    ├── login.ejs  
│    ├── main.ejs   
│    └── page.ejs     
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

/login	 ----> GET login page with username and passwort, If incorrect credentials are submitted, shows an error message.

/login	 ----> POST check user credentials (from data/users.js), if succesfull redirect to Home page, if unsuccesfull reload login page with error.

/	 ----> GET Home page with a link to the articles list.

/set-cookie/:theme  ----> GET page with themes and set one theme (light or dark). Returns message with confirmation.

/articles ----> GET	HTML page showing a list of all articles. Each article links to its detail page.

/articles/:id ----> GET	Displays a specific article by ID using EJS. If not found, returns 404.



## Article Data

Articles are stored in data/articles.js as an array of objects.


## EJS Template

The views/page.ejs file is used for rendering individual article pages via EJS.
