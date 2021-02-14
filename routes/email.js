const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email');

router.get('/:businessId', emailController.getByBusinessId);
router.post('/', emailController.addEmail);


module.exports = router;

