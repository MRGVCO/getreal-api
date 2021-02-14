const leadDao = require('../dao/lead');

var leadController = {
    getByBusinessId: getByBusinessId,
    addLead : addLead,    
    deleteLead : deleteLead,
}

function getByBusinessId(req, res) {
  leadDao.getByBusinessId(req.params.businessId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}


function addLead(req, res) {

  const lead = {
    business_id: req.body.business_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    reason: req.body.reason,
    residence: req.body.residence,
    progress: 0,
  }

 

   leadDao.addLead(lead).
    then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

function deleteLead(req, res){
  leadDao.deleteLead(req.params.leadId).
        then((data) => {
            res.status(200).json({
                message: "Lead deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = leadController;
