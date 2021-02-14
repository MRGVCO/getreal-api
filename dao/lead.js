const Lead = require('../models/lead');

var leadDao = {
    getByBusinessId: getByBusinessId,
    addLead : addLead,
    deleteLead : deleteLead,
}


function getByBusinessId(businessId) {
    return Lead.findAll({ where: { business_id: businessId } });
}

function addLead(lead) {
    var newLead = new Lead(lead);
    return newLead.save();
}


function deleteLead(id) {
    return Lead.destroy({ where: { id: id } });
}

module.exports = leadDao;
