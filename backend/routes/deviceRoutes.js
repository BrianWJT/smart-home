const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

router.post('/toggle', deviceController.toggleDevice);

module.exports = router;
