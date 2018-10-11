# Tracking time Application



## Introduction
This is a simple full stack React application with a Node.js and Express backend. Client side code is written in React, the backend API is written using Express and the database used is MongoDB.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

## About this assignment
### Time spent on developpment : 6-7 hours
### Time spent on testing and fixing bugs : 0-1 hours
If I had more time I would add "delete" and "edit" functionalities to effectively handle logs. I did enjoy working in this project, but I am not very satisfied with its design. Actually, I could make a better UX with elegant design and with more sophisticated functionalities.

### 

## Prerequisites

First, you need to install node. You can download from [here](https://nodejs.org/en/).
Then you need to download and install [MongoDB](https://www.mongodb.com/).

## Development mode
In the development mode, we will have 2 servers running. The front end code will be served by the webpack dev server which helps with hot and live reloading. The server side Express code will be served by a node server using nodemon which helps in automatically restarting the server whenever server side code changes.

## Quick Start
```bash
# Clone the repository
git clone https://github.com/Abdlfattah/tracking_time.git

# Launch mongodb via terminal
mongod

# Install and launch Robo 3T

# Create a connection and connect
localhost:27017

# Go inside the main directory
cd tracking_time

# Install dependencies for server side
npm install

# Go inside the client directory
cd client

# Install dependencies for client side
npm install

# Start development server
cd ..
npm run dev
```

## Folder Structure
All the source code will be inside **src** directory. Inside src, there is client and server directory. All the frontend code (react, css, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.

## Express

Express is a web application framework for Node.js. It is used to build our backend API's.

src/server/index.js is the entry point to the server application. Below is a screenshot of the src/server/index.js file

```javascript
const express = require("express");
const app = express();

app.post('/api/post',(req,res)=>{
    const newTrackedTime = new TrackedTime(req.body)
    newTrackedTime.save((err)=>{
        if(err) return res.send({
            success:false,
            msg:err.message
        })
        res.json({success:true})
    })
    
})
app.listen(port,()=>{
    console.log(`SERVER RUNNNING`)
})
```

## Concurrently
[Concurrently](https://github.com/kimmobrunfeldt/concurrently) is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm/yarn script commands used.

```javascript
"server": "nodemon server/server.js",
"client": "npm run start --prefix client",
"dev": "concurrently \"npm run server\" \"npm run client\""
```
