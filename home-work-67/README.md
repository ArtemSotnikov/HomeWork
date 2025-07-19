# Express App with MongoDB and MongoDB-Express UI in Docker

This project is a simple **Express.js application** that connects to a **MongoDB database** and **MongoDB-Express UI**, all running in Docker containers. The application is configured using Dockerfile and Docker Compose, and it includes support for live-reloading with **nodemon** during development.

## Project Structure
```
HomeWork/home-work-64    
├── src/    
│    └── app.js    
├── docker-compose.yml
├── Dockerfile
├── .env    
├── .gitignore
├── nodemon.json    
├── package.json     
├── package-lock.json     
└── README.md     
```

## Getting Started

1. Clone the Repository

`git clone HomeWork`  
`cd home-work-67`

2. Run the Project with Docker Compose

`docker-compose up --build`

This will:

    Build and start your Express app

    Spin up a MongoDB container

    Start a mongo-express web UI at http://localhost:8081 (login: admin / password)

    Serve your app at http://localhost:3000

##  Live Reloading During Development
The project uses `nodemon` to watch for file changes.

To enable live reload:

1. Make changes in your local `src/app.js` file

2. Your Docker container will automatically reload and apply changes

## Useful Commands
Rebuild the containers:

`docker-compose up --build`

Stop and remove containers:

`docker-compose down`
