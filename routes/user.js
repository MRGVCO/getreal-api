const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.findUsers);
router.get('/userId/:userId', userController.findUserByUserId);
router.get('/:id', userController.findUserById);

module.exports = router;