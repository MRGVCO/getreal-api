const express = require('express');
const router = express.Router();
const authenticateController = require('../controllers/authenticate');

router.post('/adminSignUp', authenticateController.adminSignUp);
router.post('/adminDeleteUser', authenticateController.adminDeleteUser);
router.post('/changePassword', authenticateController.changePassword);
router.post('/signup', authenticateController.signup);
router.post('/confirm', authenticateController.confirm);
router.post('/resendConfirm', authenticateController.resendConfirm);
router.post('/login', authenticateController.login);
router.post('/logout', authenticateController.logout);
router.post('/validate', authenticateController.validate);
router.post('/profile', authenticateController.profile);
router.post('/profileEdit', authenticateController.profileEdit);


module.exports = router;
