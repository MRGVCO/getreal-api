const express = require('express');
const router = express.Router();
const businessController = require('../controllers/business');

router.get('/company/:companyId', businessController.getByCompanyId);
router.get('/:businessId', businessController.getByBusinessId);
router.get('/', businessController.findAll);
router.get('/query/total', businessController.queryTotal);
router.post('/', businessController.addBusiness);
router.put('/:businessId', businessController.updateBusiness);
router.delete('/:businessId', businessController.deleteBusiness);


module.exports = router;

