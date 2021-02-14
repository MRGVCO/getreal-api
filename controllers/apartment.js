const apartmentDao = require('../dao/apartment');

var apartmentController = {
    getByBusinessId: getByBusinessId,
    addApartment : addApartment,
    updateApartment : updateApartment,
    deleteApartment : deleteApartment
}


function getByBusinessId(req, res) {
  apartmentDao.getByBusinessId(req.params.businessId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}


function addApartment(req, res) {
    let apartment = {
      title : req.body.title,
      apt_number : req.body.apt_number,
      on_market : req.body.on_market,
      bedrooms : req.body.bedrooms,
      business_id : req.body.business_id,
      bathrooms : req.body.bathrooms,
      price : req.body.price,
      availability : req.body.availability,
      amenities : req.body.amenities,
      description : req.body.description,
      size  : req.body.size,
      featured : req.body.featured,      
    };

    apartmentDao.addApartment(apartment).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateApartment(req, res) {

  let apartment = {
      title : req.body.title,
      apt_number : req.body.apt_number,
      on_market : req.body.on_market,
      bedrooms : req.body.bedrooms,
      bathrooms : req.body.bathrooms,
      price : req.body.price,
      availability : req.body.availability,
      amenities : req.body.amenities,
      description : req.body.description,
      size  : req.body.size,
      featured : req.body.featured,
    };

    apartmentDao.updateApartment(apartment, req.params.apartmentId).
      then((data) => {
          res.status(200).json({
              message: "Apartment updated successfully",
              apartment: apartment
          })
      })
      .catch((error) => {
          console.log(error);
      });
   
}

function deleteApartment(req, res){
  apartmentDao.deleteApartment(req.params.apartmentId).
        then((data) => {
            res.status(200).json({
                message: "Apartment deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = apartmentController;
