const express = require('express');
const router = express.Router();
const floorplanController = require('../controllers/floorplan');

router.get('/:businessId', floorplanController.getByBusinessId);
router.get('/:businessId/:apartmentId', floorplanController.getByApartmentId);
router.post('/', floorplanController.addFloorplan);
router.put('/:floorplanId', floorplanController.updateFloorplan);
router.delete('/:floorplanId', floorplanController.deleteFloorplan);


module.exports = router;
