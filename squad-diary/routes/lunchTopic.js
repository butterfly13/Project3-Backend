const express = require('express');
const router = express.Router();
const topicController = require('../controllers/lunchTopic.js');

router.get('/index', topicController.index );
router.post('/newTopic', topicController.createTopic);



module.exports = router;