const businessDao = require('../dao/business');

var businessController = {
    getByBusinessId: getByBusinessId,
    getByCompanyId: getByCompanyId,
    queryTotal: queryTotal,
    addBusiness : addBusiness,
    updateBusiness : updateBusiness,
    deleteBusiness : deleteBusiness,
    findAll : findAll
}


function findAll(req, res) {
    businessDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


function getByBusinessId(req, res) {
  businessDao.getByBusinessId(req.params.businessId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}

function getByCompanyId(req, res) {
  businessDao.getByCompanyId(req.params.companyId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}

function queryTotal(req, res) {
  businessDao.queryTotal().
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}


function addBusiness(req, res) {
    let business = {
        name: req.body.name,
        company : req.body.company,
        email : req.body.email,
        logo: req.body.logo,    
    };


    businessDao.addBusiness(business).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateBusiness(req, res) {

  let business = {
        name:req.body.name,
        address:req.body.address,
        postal_code:req.body.postal_code,
        region:req.body.region,
        city:req.body.city,
        neighborhood:req.body.neighborhood,
        phone:req.body.phone,
        email:req.body.email,
        url:req.body.url,
        logo:req.body.logo,
        website_template:req.body.website_template,
        description:req.body.description,
        apartment:req.body.apartments,
        amenities:req.body.amenities,
        photos:req.body.photos,
        payments:req.body.payments,
        multiple:req.body.multiple,
        company:req.body.company,
     }

    businessDao.updateBusiness(business, req.params.businessId).
      then((data) => {
          res.status(200).json({
              message: "Business updated successfully",
              business: business
          })
      })
      .catch((error) => {
          console.log(error);
      });
   
}

function deleteBusiness(req, res){
  businessDao.deleteBusiness(req.params.businessId).
        then((data) => {
            res.status(200).json({
                message: "Business deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = businessController;









