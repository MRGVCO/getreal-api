const emailDao = require("../dao/email");

var emailController = {
  getByBusinessId: getByBusinessId,
  addEmail: addEmail,
};

function getByBusinessId(req, res) {
  emailDao
    .getByBusinessId(req.params.businessId)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getById(id) {
  return companyDao
    .companyCheck(name)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function addEmail(req, res) {
  if (req.body.timestamp != undefined) {
    let businessId, storeEmail, vars, email;

    if (req.body["X-Mailgun-Variables"]) {
      vars = JSON.parse(req.body["X-Mailgun-Variables"]);
    }

    email = {
      mail_id: req.body["Message-Id"],
      mail_to: req.body.To,
      mail_from: req.body.From,
      mail_cc: req.body.Cc,
      subject: req.body.Subject,
      plain: req.body["body-plain"],
      html: req.body["body-html"],
    };

    if (vars) {
      businessId = vars.businessId;
      email.business_id = vars.businessId;
      email.bucket = "Sent";
      email.status = "delivered";
      res.send(email);
    } else {
      const references = req.body.References.split(" ")[0];

      const mailById = getById(references);

      mailById.then((r) => {
        businessId = r.data[0].business_id ? r.data[0].business_id : "";
        email.business_id = businessId;
        email.bucket = "Inbox";
        email.status = "unread";
      });
    }

    emailDao
      .addEmail(email)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = emailController;


