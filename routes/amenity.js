const express = require('express');
const router = express.Router();
const amenityController = require('../controllers/amenity');

router.get('/:businessId', amenityController.getByBusinessId);
router.post('/', amenityController.addAmenity);
router.delete('/:id', amenityController.deleteAmenity);


module.exports = router;