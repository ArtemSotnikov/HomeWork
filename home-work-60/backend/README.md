# Simple Server with Articles on Express and EJS

This project implements a basic server using Node.js with Express and EJS. The server provides REST-style routes for working with a collection of articles and server-side rendering to display individual articles.

## Project Structure

HomeWork/home-work-60/backend  
├── data/  
│   └── articles.js  
├── src/  
│   └── server.js  
├── views/  
│   └── page.ejs   
├── .gitignore   
├── package.json   
├── package-lock.json   
└── README.md   

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

/	 ----> GET Home page with a link to the articles list.

/articles ----> GET	HTML page showing a list of all articles. Each article links to its detail page.

/articles/:id ----> GET	Displays a specific article by ID using EJS. If not found, returns 404.

## Article Data

Articles are stored in data/articles.js as an array of objects.


## EJS Template

The views/page.ejs file is used for rendering individual article pages via EJS.
