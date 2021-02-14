const Design = require('../models/design');

var designDao = {
    getByBusinessId: getByBusinessId,
    addDesign : addDesign,
    updateDesign : updateDesign,
}



function addDesign(design) {
    var newDesign = new Design(design);
    return newDesign.save();
}

function getByBusinessId(businessId) {
    return Design.findAll({ where: { business_id: businessId } });
}

function updateDesign(design, id) {
    return Design.update(design, { where: { id: id } });
}


module.exports = designDao;


