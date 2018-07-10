const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const LunchTopic = new Schema({
    contents: String
   
})

module.exports = mongoose.model('LunchTopic', LunchTopic)

