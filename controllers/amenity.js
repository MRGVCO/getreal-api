const amenityDao = require('../dao/amenity');

var amenityController = {
    getByBusinessId: getByBusinessId,
    addAmenity : addAmenity,
    deleteAmenity : deleteAmenity
}


function getByBusinessId(req, res) {
	amenityDao.getByBusinessId(req.params.businessId).
	    then((data) => {
	        res.send(data);
	    })
	    .catch((error) => {
	        console.log(error);
	    });	
}


function addAmenity(req, res) {
    let amenity = {
	    business_id: req.body.business_id,
	    type: req.body.type,
	    name: req.body.name
  	};

    amenityDao.addAmenity(amenity).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteAmenity(req, res){
	amenityDao.deleteAmenity(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Amenity deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = amenityController;
