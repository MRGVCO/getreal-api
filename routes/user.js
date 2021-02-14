const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.findUsers);
router.get('/:id', userController.findUserById);
router.get('/uid/:userId', userController.findUserByUserId);
router.get('/email/:email', userController.findUserByUserEmail);
router.post('/', userController.registerUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUserById);


module.exports = router;