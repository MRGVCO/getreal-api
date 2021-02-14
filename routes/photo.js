const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photo');

router.get('/:businessId', photoController.getByBusinessId);
router.get('/:businessId/:apartmentId', photoController.getByApartmentId);
router.post('/', photoController.addPhoto);
router.post('/getAll', photoController.getAll);
router.put('/:photoId', photoController.updatePhoto);
router.delete('/:photoId', photoController.deletePhoto);


module.exports = router;



