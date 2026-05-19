const sendPrompt =require('../controller/PromptController')
const express = require('express');
const router = express.Router();

router.post('/prompt',sendPrompt)

module.exports = router;