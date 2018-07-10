const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Entry = new Schema({
    weekNumber: Number,
    contents: String,
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Entry', Entry)