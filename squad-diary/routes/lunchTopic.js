const express = require("express");
const router = express.Router();
const topicController = require("../controllers/lunchTopic.js");

router.get("/", topicController.index);
router.post("/", topicController.createTopic);

module.exports = router;
