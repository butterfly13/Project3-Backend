const mongodb = require("mongodb");
const mongoose = require("mongoose");
const request = require("request");

if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/squaddiary");

  // mongoose.connect(
  //   "mongodb://mariyawhitcomb:sakypmen7@ds133601.mlab.com:33601/squad-diary"
  // );
}

mongoose.Promise = Promise;
module.exports = mongoose;
