const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')

const app = express()
http = require('http');

// Mongoose coonection
require('./db/mongoose');

// Require routes
const TaskRouter = require('./routes/Task');
const TopicRouter = require('./routes/Topic');

//app configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    // origin: ["http://localhost:3000"],
    origin: true,
    credentials: true,
}
));

//use routes
app.use('/task', TaskRouter)
app.use('/topic', TopicRouter)
app.use('/', (req, res) => res.send("YES"))

//server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Working...");
})