const companyDao = require('../dao/company');

var companyController = {
    getByCompanyId: getByCompanyId,
    addCompany : addCompany,
    updateCompany : updateCompany,
    deleteCompany : deleteCompany,
    findAll : findAll,
    companyCheck : companyCheck,
}


function findAll(req, res) {
    companyDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


function getByCompanyId(req, res) {
  companyDao.getByCompanyId(req.params.companyId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}

function getByCompanyId(req, res) {
  companyDao.getByCompanyId(req.params.companyId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}

function companyCheck(name){
  return companyDao.companyCheck(name).
      then((data) => {
          return data;
      })
      .catch((error) => {
          console.log(error);
      }); 
}


function addCompany(req, res) {

  const company_exists = companyCheck(req.body.name)
  
  company_exists.then(data => {
      if (data == null) {
          let company = {
            name: req.body.name,
            photo: req.body.photo,
            email: req.body.email,
          };

          companyDao.addCompany(company).
            then((data) => {
                res.send(data);
            })
            .catch((error) => {
                console.log(error);
            });

        } else {
          return res.send('Company Already Exists');
        }

  })    
}

function updateCompany(req, res) {

  let company = {
        email: req.body.email,
        buildings: req.body.buildings,
        name: req.body.name,
        about: req.body.about,
        photo: req.body.photo,
        active: req.body.active,
        verified: req.body.verified,
        userId: req.body.userId,
     }

    companyDao.updateCompany(company, req.params.companyId).
      then((data) => {
          res.status(200).json({
              message: "Company updated successfully",
              company: company
          })
      })
      .catch((error) => {
          console.log(error);
      });
   
}

function deleteCompany(req, res){
  companyDao.deleteCompany(req.params.companyId).
        then((data) => {
            res.status(200).json({
                message: "Company deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = companyController;

