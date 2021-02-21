const buildingDao = require('../dao/building');

var buildingController = {
    getByBuildingId: getByBuildingId,
    getByCompanyId: getByCompanyId,
    queryTotal: queryTotal,
    addBuilding : addBuilding,
    updateBuilding : updateBuilding,
    deleteBuilding : deleteBuilding,
    findAll : findAll
}


function findAll(req, res) {
    buildingDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


function getByBuildingId(req, res) {
  buildingDao.getByBuildingId(req.params.buildingId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}

function getByCompanyId(req, res) {
  buildingDao.getByCompanyId(req.params.companyId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}

function queryTotal(req, res) {
  buildingDao.queryTotal().
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}


function addBuilding(req, res) {
    let building = {
        name: req.body.name,
        company : req.body.company,
        email : req.body.email,
        logo: req.body.logo,    
    };


    buildingDao.addBuilding(building).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateBuilding(req, res) {

  let building = {
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

    buildingDao.updateBuilding(building, req.params.buildingId).
      then((data) => {
          res.status(200).json({
              message: "Building updated successfully",
              building: building
          })
      })
      .catch((error) => {
          console.log(error);
      });
   
}

function deleteBuilding(req, res){
  buildingDao.deleteBuilding(req.params.buildingId).
        then((data) => {
            res.status(200).json({
                message: "Building deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = buildingController;









