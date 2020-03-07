const uuid = require('uuid')
const structjson = require('./structjson.js')

const express = require('express') // import framework
const router  = express.Router()   // create router app

const Opinion = require('../models/Opinion') // import db
const dialogflow = require('dialogflow')

require('dotenv/config')                     // import keys
const projectId = process.env.PROJECT_ID
const sessionId = 'temporary_session_id'
const language  = 'en-US'

// Create a new session
const sessionClient = new dialogflow.SessionsClient()
const sessionPath   = sessionClient.sessionPath(projectId, sessionId)
console.log(sessionPath)

// text query route
router.post('/textQuery', async (req, res)=>{   // send text query request
    const request = {                           // from client to DialogFlow API
        session: sessionPath,
        queryInput: {
            text: {
                text: req.body.text,            // query to send
                languageCode: language
            }// text
        }// query input
    }// request
    const responses = await sessionClient.detectIntent(request) // send request
    //console.log('Detected intent')                            // log result
    const result = responses[0].queryResult
    //console.log(`  Query:    ${result.queryText}`)
    //console.log(`  Response: ${result.fulfillmentText}`)
    res.send(result)
})// text query route

// event query route
router.post('/eventQuery', async(req, res)=>{   // sed text query request
    const request = {                           // from clinet to Dialogfow API
        session: sessionPath,
        queryInput: {
            event: {
                name: req.body.event,           // query to send
                languageCode: language
            }// event
        }// query input
    }// request
    const responses = await sessionClient.detectIntent(request) // send query
    //console.log('Detected intent')                            // log result
    const result = responses[0].queryResult
    //console.log(`  Query: ${result.queryText}`)
    //console.log(`  Response: ${result.fulfillmentText}`)
    res.send(result)
})

module.exports = router