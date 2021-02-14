const express = require('express');
const router = express.Router();
const apartmentController = require('../controllers/apartment');

router.get('/:businessId', apartmentController.getByBusinessId);
router.post('/', apartmentController.addApartment);
router.put('/:apartmentId', apartmentController.updateApartment);
router.delete('/:apartmentId', apartmentController.deleteApartment);


module.exports = router;