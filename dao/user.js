const User = require('../models/user');
var userDao = {
    findAll: findAll,
    findByUserId: findByUserId,
    findByUserEmail: findByUserEmail,
    findById: findById,
    registerUser: registerUser,
    updateUser: updateUser,
    deleteUserById: deleteUserById
}

function findAll() {
    return User.findAll();
}

function findByUserId(userId) {
    return User.findOne({ where: { user_id: userId } });
}

function findByUserEmail(email) {
    return User.findOne({ where: { email: email } });
}

function registerUser(user) {
    var newUser = new User(user);
    return newUser.save();
}

function registerUser(user) {
    var newUser = new User(user);
    return newUser.save();
}

function updateUser(user, id) {
    return User.update(user, { where: { id: id } });
}

function findById(id) {
    return User.findByPk(id);
}

function deleteUserById(id) {
    return User.destroy({ where: { id: id } });
}

module.exports = userDao;