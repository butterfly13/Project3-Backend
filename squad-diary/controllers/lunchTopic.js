const LunchTopic = require("../models/LunchTopic");

module.exports = {
  // show all topic
  index: (req, res) => {
    LunchTopic.find({})
      .then(topic => {
        res.json(topic);
      })
      .catch(err => {
        console.log(err);
      });
  },
  // create new entry
  createTopic: (req, res) => {
    const content = req.body.content;

    LunchTopic.create({
      content: content
    })
      .then(topic => {
        res.json(topic);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
