const User = require('../models/user');
var userDao = {
    findAll: findAll,
}

function findAll() {
    return User.findAll();
}

module.exports = userDao;