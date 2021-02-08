const userDao = require('../dao/user');

var userController = {
    findUsers: findUsers,
}

function findUsers(req, res) {
    userDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


module.exports = userController;