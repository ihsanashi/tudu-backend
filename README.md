# Table of contents

- [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
  - [Learn More](#learn-more)
  - [Deployment](#deployment)
    - [Disclaimer](#disclaimer)

## Introduction

This project serves as a REST API for [Tudu](https://github.com/ihsanashi/react-tudu), a to-do list frontend application. It was built with Node.js, Express, MongoDB, and the routes are secured with Auth0 and JWT.

## Technologies

- Node.js, backend JavaScript runtime environment
- Express, a minimal Node.js web application framework
- MongoDB, a NoSQL database using JSON-like collections and documents instead of tables, rows and columns often seein with SQL type databases
- Mongoose, an object modeling tool for MongoDB, and for connecting to MongoDB Atlas
- Auth0, an adaptable authentication and authorization platform with excellent docs!

## Getting Started

First, run the development server:

```bash
npm run dev
```

*Yarn configuration wasn't set, so you can customise it to your preference.*

Open [http://localhost:8080](http://localhost:8080) in your browser to make a GET request to the `/` route. This root route serves no purpose other than showing that your application is running correctly.

I tried my best to organise this repo according to MVC practices, so you can expand on this project by working in the [controllers](controllers) and [models](models) directories.

*There is no View (the V in MVC) directory in this repo since this backend project is decoupled from the React frontend. This project only serves as a REST API service, and can be integrated with your chosen clients.*

## Learn More

To learn more about the tools used in this repo, you should start with these official resources:

- [Node.js](https://nodejs.org/en/) - Install Node.js and NPM to run and build backend JavaScript applications
- [Express.js Documentation](https://expressjs.com/) - learn how to get started with the Express framework
- [MongoDB](https://www.mongodb.com/) - An easy to use document-based NoSQL database
- [Auth0](https://auth0.com/) - Identity management platform for application builders
- [Securing RESTful APIs with Auth0](https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/) - The tutorial I followed for securing the Express routes in this repo

## Deployment

I chose [Heroku](https://www.heroku.com/) for my deployment platform, but you can also opt for other Node.js-friendly platforms such as AWS, Azure, Digital Ocean, and Google Cloud.

### Disclaimer

*This project is by no means production-ready and written with perfect code. I'm merely developing this application to practice and learn about backend development, and to eventually integrate with my To-do list React frontend. This project is actively in development during my spare time.*