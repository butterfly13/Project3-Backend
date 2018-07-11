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
    let content = req.body.newLunchTopic.content;
    console.log(req.body.newLunchTopic.content)
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
