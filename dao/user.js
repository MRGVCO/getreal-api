const User = require('../models/user');
var userDao = {
    findAll: findAll,
    findByUserId: findByUserId,
    findById: findById,
}

function findAll() {
    return User.findAll();
}

function findByUserId(userId) {
    return User.findOne({ where: { user_id: userId } });
}

function findById(id) {
    return User.findByPk(id);
}

module.exports = userDao;