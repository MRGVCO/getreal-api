const express = require('express');
const router = express.Router();
const designController = require('../controllers/design');

router.get('/:businessId', designController.getByBusinessId);
router.post('/', designController.addDesign);
router.put('/:businessId', designController.updateDesign);


module.exports = router;






