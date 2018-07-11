var express = require("express");
var router = express.Router();

router.use("/entry", require("./entry"));
router.use("/", require("./lunchTopic"));

module.exports = router;
