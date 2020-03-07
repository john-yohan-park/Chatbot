const express = require('express')  // import framework
const app = express()               // init app

require('dotenv/config')             // import keys
const mongoose = require('mongoose') // import database
mongoose.connect(                    // connect to database
    process.env.MONGO_KEY, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{console.log('Connected to database')}
)// connect to db

// routes
const dialogflowRoute = require('./server/routes/dialogflow')

// const cors = require('cors')
// app.use(cors())

// middleware
app.use(express.urlencoded({extended: true})) // process incoming
app.use(express.json())                       // req as json
app.use('/api/dialogflow', dialogflowRoute)

const path = require('path')
if (process.env.NODE_ENV === "production") { // if in production, serve static assets 
    app.use(express.static("client/build"))  // set static folder
    app.get("*", (req, res) => {             // index.html for all page routes
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })// app get
}// if

const port = process.env.PORT || 5000
app.listen(port, () => {console.log(`Listening on port ${port}`)})