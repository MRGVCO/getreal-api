const Floorplan = require('../models/floorplan');

var floorplanDao = {
    getByBusinessId: getByBusinessId,
    addFloorplan : addFloorplan,
    updateFloorplan : updateFloorplan,
    deleteFloorplan : deleteFloorplan,
}


function getByBusinessId(businessId) {
    return Floorplan.findAll({ where: { business_id: businessId } });
}

function addFloorplan(floorplan) {
    var newFloorplan = new Floorplan(floorplan);
    return newFloorplan.save();
}

function updateFloorplan(floorplan, id) {
    return Floorplan.update(floorplan, { where: { id: id } });
}


function deleteFloorplan(id) {
    return Floorplan.destroy({ where: { id: id } });
}

module.exports = floorplanDao;
