const Entry = require("../models/Entry");
const listData = require("./list");

listData.forEach(entry => {
  console.log(entry);
  Entry.create({
    weekNumber: entry.weekNumber,
    content: entry.content
  }).then(doneEntry => {
    doneEntry.save();
  });
});
