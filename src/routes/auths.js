const express = require('express');

const { addAuth } = require('../controllers/auths');
const router = express.Router();

router.post('/', addAuth);

module.exports = router;