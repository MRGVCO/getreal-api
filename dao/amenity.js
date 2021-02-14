const Amenity = require('../models/amenity');

var amenityDao = {
    getByBusinessId: getByBusinessId,
    addAmenity : addAmenity,
    deleteAmenity : deleteAmenity
}

function addAmenity(amenity) {
    var newAmenity = new Amenity(amenity);
    return newAmenity.save();
}

function getByBusinessId(businessId) {
    return Amenity.findAll({ where: { business_id: businessId } });
}


function deleteAmenity(id) {
    return Amenity.destroy({ where: { id: id } });
}

module.exports = amenityDao;