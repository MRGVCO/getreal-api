const Business = require('../models/business');

var businessDao = {
	findAll : findAll,
    getByBusinessId: getByBusinessId,
    getByCompanyId: getByCompanyId,
    queryTotal: queryTotal,
    addBusiness : addBusiness,
    updateBusiness : updateBusiness,
    deleteBusiness : deleteBusiness
}

function findAll() {
    return Business.findAll();
}

function addBusiness(business) {
    var newBusiness = new Business(business);
    return newBusiness.save();
}

function getByBusinessId(businessId) {
    return Business.findAll({ where: { id: businessId } });
}

function getByCompanyId(companyId) {
    return Business.findAll({ where: { company: companyId } });
}


function queryTotal() {
    return Business.findAndCountAll();
}


function updateBusiness(business, id) {
    return Business.update(business, { where: { id: id } });
}


function deleteBusiness(id) {
    return Business.destroy({ where: { id: id } });
}

module.exports = businessDao;
