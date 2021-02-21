var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'alive'});
});

const userRoutes = require('./user');
const amenityRoutes = require('./amenity');
const apartmentRoutes = require('./apartment');
const buildingRoutes = require('./building');
const companyRoutes = require('./company');
const designRoutes = require('./design');
const emailRoutes = require('./email');
const floorplanRoutes = require('./floorplan');
const leadRoutes = require('./lead');
const photoRoutes = require('./photo');
const authenticateRoutes = require('./authenticate');

router.use('/users', userRoutes);
router.use('/amenities', amenityRoutes);
router.use('/apartments', apartmentRoutes);
router.use('/buildings', buildingRoutes);
router.use('/companies', companyRoutes);
router.use('/designs', designRoutes);
router.use('/emails', emailRoutes);
router.use('/floorplans', floorplanRoutes);
router.use('/leads', leadRoutes);
router.use('/photos', photoRoutes);
router.use('/authenticate', authenticateRoutes);


module.exports = router;
