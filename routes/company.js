const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company');

router.get('/:companyId', companyController.getByCompanyId);
router.get('/', companyController.findAll);
router.post('/', companyController.addCompany);
router.put('/:companyId', companyController.updateCompany);
router.delete('/:companyId', companyController.deleteCompany);


module.exports = router;





