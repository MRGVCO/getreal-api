const Email = require('../models/email');

var emailDao = {
    getByBusinessId: getByBusinessId,
    addEmail : addEmail,
}



function addEmail(email) {
    var newEmail = new Email(email);
    return newEmail.save();
}

function getByBusinessId(businessId) {
    return Email.findAll({
    where: { business_id: businessId },
    order: [["created", "DESC"]],
  });
}


module.exports = emailDao;


