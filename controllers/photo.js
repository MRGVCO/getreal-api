const photoDao = require('../dao/photo');

var photoController = {
    getByBusinessId: getByBusinessId,
    getByApartmentId: getByApartmentId,
    getAll: getAll,
    addPhoto : addPhoto,    
    updatePhoto : updatePhoto,    
    deletePhoto : deletePhoto,
}

function getByBusinessId(req, res) {
  photoDao.getByBusinessId(req.params.businessId).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      }); 
}

function getByApartmentId(req, res) {
  const data = photoDao.getByBusinessId(req.params.businessId);

  data.then(photos => {
    let allPhotos = [];
    photos.map(photo => {
      if(photo.dataValues.type){
        if(photo.dataValues.type.apartment.length){
          photo.type.apartment.map(p => {
            if(p.apartment_id === Number(req.params.apartmentId)){
              allPhotos.push(photo)      
            }          
          })
        }
      }    
    })
    return res.send(allPhotos);
  })
}


function getAll(req, res) {
  const data = photoDao.getByBusinessId(req.body.businessId);
  data.then(photos => {
    let filterPhotos = [];
    if (req.body.filterobj) {
      const featuredlst = req.body.filterobj.featured;
      const apartmentlst = req.body.filterobj.apartment;
      const apartmentAmelst = req.body.filterobj.apartmentame;
      const buildingAmelst = req.body.filterobj.buildingame;
      photos.forEach(photo => {
        if (photo.type) {
          const featuredkey = photo.type['featured'].map(p => p.key);
          const apartmentkey = photo.type['apartment'].map(p => p.key);
          const apartmentAmekey = photo.type['apartment_amenity'].map(p => p.key);
          const buildingAmekey = photo.type['building_amenity'].map(p => p.key);
          if (filterPhoto(featuredlst, featuredkey)
            && filterPhoto(apartmentlst, apartmentkey)
            && filterPhoto(apartmentAmelst, apartmentAmekey)
            && filterPhoto(buildingAmelst, buildingAmekey)) {
              filterPhotos.push(photo);
          }
        }
      });
    } else {
      filterPhotos = photos;
    }  
    return res.send(filterPhotos);
  })
}


function addPhoto(req, res) {
    const photo = {
      business_id: req.body.business_id,
      firebaseName: req.body.firebaseName,
      description: req.body.description,
      name: req.body.name,
      order: null,
      uid: req.body.uid,
      url: req.body.url
    }   

     photoDao.addPhoto(photo).
      then((data) => {
          res.send(data);
      })
      .catch((error) => {
          console.log(error);
      });
}

function updatePhoto(req, res) {

  let photo = {
      type: req.body.type,
      name: req.body.name,
      description: req.body.description,
      order: req.body.order
    }

    photoDao.updatePhoto(photo, req.params.photoId).
      then((data) => {
          res.status(200).json({
              message: "Photo updated successfully",
              photo: photo
          })
      })
      .catch((error) => {
          console.log(error);
      });
   
}

function deletePhoto(req, res){
  photoDao.deletePhoto(req.params.photoId).
        then((data) => {
            res.status(200).json({
                message: "Photo deleted successfully"
            })
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = photoController;
