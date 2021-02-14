const Photo = require('../models/photo');

var photoDao = {
    getByBusinessId: getByBusinessId,
    addPhoto : addPhoto,
    updatePhoto : updatePhoto,
    deletePhoto : deletePhoto,
}


function getByBusinessId(businessId) {
    return Photo.findAll({ where: { business_id: businessId } });
}

function addPhoto(photo) {
    var newPhoto = new Photo(photo);
    return newPhoto.save();
}

function updatePhoto(photo, id) {
    return Photo.update(photo, { where: { id: id } });
}


function deletePhoto(id) {
    return Photo.destroy({ where: { id: id } });
}

module.exports = photoDao;
