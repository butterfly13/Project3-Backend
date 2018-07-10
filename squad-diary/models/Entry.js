const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Entry = new Schema({
    weekNumber: Number,
    content: String,
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Entry', Entry)