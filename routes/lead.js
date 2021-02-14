const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead');

router.get('/:businessId', leadController.getByBusinessId);
router.post('/', leadController.addLead);
router.delete('/:leadId', leadController.deleteLead);


module.exports = router;





