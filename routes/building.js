const express = require('express');
const router = express.Router();
const buildingController = require('../controllers/building');

router.get('/company/:companyId', buildingController.getByCompanyId);
router.get('/:buildingId', buildingController.getByBuildingId);
router.get('/', buildingController.findAll);
router.get('/query/total', buildingController.queryTotal);
router.post('/', buildingController.addBuilding);
router.put('/:buildingId', buildingController.updateBuilding);
router.delete('/:buildingId', buildingController.deleteBuilding);


module.exports = router;

