const express = require('express');
const router = express.Router();
const mtaController = require('../controllers/mta');

router.get('/', mtaController.getMta);


module.exports = router;

