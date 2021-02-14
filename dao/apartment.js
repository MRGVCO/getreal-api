const Apartment = require('../models/apartment');

var apartmentDao = {
    getByBusinessId: getByBusinessId,
    addApartment : addApartment,
    updateApartment : updateApartment,
    deleteApartment : deleteApartment
}

function addApartment(apartment) {
    var newApartment = new Apartment(apartment);
    return newApartment.save();
}

function getByBusinessId(businessId) {
    return Apartment.findAll({ where: { business_id: businessId } });
}

function updateApartment(apartment, id) {
    return Apartment.update(apartment, { where: { id: id } });
}


function deleteApartment(id) {
    return Apartment.destroy({ where: { id: id } });
}

module.exports = apartmentDao;