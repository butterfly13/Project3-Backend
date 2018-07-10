const Entry = require('../models/Entry')

module.exports = {
    // show all entry
    index: (req, res) => {
        Entry.find({})
        .then(entry => {
            res.json(entry)
        })
        .catch(err => {
            console.log(err)
        })
    };

    // create new entry
    createEntry: (req, res) => {
        const weekNumber = req.body.weekNumber
        const content = req.body.content

        Entry.create({
            weekNumber: weekNumber,
            content: content
        })
        .then(entry => {
            res.json(entry)
        })
        .catch(err => {
            console.log(err)
        })
    };

    // delete entry
    


}