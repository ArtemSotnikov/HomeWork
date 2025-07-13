# Simple Server on Express with connection to MongodDB and CRUD functionality with Passport authentication (from local file)

A simple Express.js web app that connects to MongoDB Atlas and allows users to filter movies from the sample_mflix database using different search criteria:

- Title
- Year
- Genre
- Cast member
- IMDb rating (greater than a given value)

## Project Structure
```
HomeWork/home-work-64    
├── src/    
│    └── app.js    
├── views/   
│    └── movies.ejs      
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
```

Start the server:

`npm start`

Open the app in your browser:

`http://localhost:4000`

Command	description:

`npm start`	starts the server using nodemon for auto-reload

## Routes
Route	method description:

/movies	 ----> GET search page for movies, with pagination 10 movies per page.

## EJS Template

The view "movies" to render the search page via EJS.
