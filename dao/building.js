const Building = require('../models/building');

var buildingDao = {
	findAll : findAll,
    getByBuildingId: getByBuildingId,
    getByCompanyId: getByCompanyId,
    queryTotal: queryTotal,
    addBuilding : addBuilding,
    updateBuilding : updateBuilding,
    deleteBuilding : deleteBuilding
}

function findAll() {
    return Building.findAll();
}

function addBuilding(building) {
    var newBuilding = new Building(building);
    return newBuilding.save();
}

function getByBuildingId(buildingId) {
    return Building.findAll({ where: { id: buildingId } });
}

function getByCompanyId(companyId) {
    return Building.findAll({ where: { company: companyId } });
}


function queryTotal() {
    return Building.findAndCountAll();
}


function updateBuilding(building, id) {
    return Building.update(building, { where: { id: id } });
}


function deleteBuilding(id) {
    return Building.destroy({ where: { id: id } });
}

module.exports = buildingDao;
