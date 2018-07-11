const Entry = require("../models/Entry");

module.exports = {
  // show all entry
  index: (req, res) => {
    Entry.find({})
      .then(entry => {
        res.json(entry);
      })
      .catch(err => {
        console.log(err);
      });
  },

  // create new entry
  createEntry: (req, res) => {
    const weekNumber = req.body.weekNumber;
    const content = req.body.content;

    Entry.create({
      weekNumber: weekNumber,
      content: content
    })
      .then(entry => {
        res.json(entry);
      })
      .catch(err => {
        console.log(err);
      });
  },

  // delete entry
  deleteEntry: (req, res) => {
    Entry.findByIdAndRemove(req.params.id)
      .then(entry => {
        if (!entry) {
          return res.status(404).send({
            message: "Entry not found with id " + req.params.id
          });
        }
        res.send({ message: "Entry is deleted" });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
