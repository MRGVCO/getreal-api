const Company = require('../models/company');

var companyDao = {
    findAll : findAll,
    getByCompanyId: getByCompanyId,
    addCompany : addCompany,
    updateCompany : updateCompany,
    deleteCompany : deleteCompany,
    companyCheck : companyCheck 
}

function findAll() {
    return Company.findAll();
}

function addCompany(company) {
    var newCompany = new Company(company);
    return newCompany.save();
}

function getByCompanyId(companyId) {
    return Company.findAll({ where: { id: companyId } });
}

function companyCheck(name) {    
    return Company.findOne({ where: { name: name } });
}

function updateCompany(company, id) {
    return Company.update(company, { where: { id: id } });
}


function deleteCompany(id) {
    return Company.destroy({ where: { id: id } });
}

module.exports = companyDao;
