const express = require('express')  // import framework
const app     = express()           // init app

require('dotenv/config')             // import keys

const mongoose = require('mongoose') // import database

mongoose.connect(                    // connect to database
    process.env.MONGO_KEY, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{console.log('Connected to database')}
)
const path = require('path')

// routes
const dialogflowRoute = require('./server/routes/dialogflow')

// middleware
app.use(express.urlencoded({extended: true})) // process incoming
app.use(express.json())                       // req as json
app.use('/', dialogflowRoute)

app.listen(3000, ()=>{console.log('Listening on port 3000')})