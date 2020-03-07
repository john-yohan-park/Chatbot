const mongoose = require('mongoose')

const OpinionSchema = mongoose.Schema({
    name        : String,
    opinion     : String,
    email       : String,
    registerDate: Date
})// opinion schema

module.exports = mongoose.model('Opinion', OpinionSchema)