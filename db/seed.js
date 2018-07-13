const Entry = require("../models/Entry");
const LunchTopic = require("../models/LunchTopic");
const listData = require("./list");
const topic = require("./topic");

// Entry.remove({})
//   .then(() => {
//     Entry.collection.insert(listData).then(entries => {
//       console.log(entries);
//       process.exit();
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

LunchTopic.remove({}).then(() => {
  LunchTopic.collection
    .insert(topic)
    .then(items => {
      console.log(items);
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});
