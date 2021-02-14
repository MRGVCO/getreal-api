const userDao = require('../dao/user');
const generator = require('generate-password');

var userController = {
    findUsers: findUsers,
    findUserByUserId: findUserByUserId,
    findUserById : findUserById,
    findUserByUserEmail : findUserByUserEmail,
    registerUser : registerUser,
    updateUser : updateUser,
    deleteUserById : deleteUserById
}

function findUserByUserId(req, res) {
	console.log(req.params.userId);
	userDao.findByUserId(req.params.userId).
	    then((data) => {
	        res.send(data);
	    })
	    .catch((error) => {
	        console.log(error);
	    });	
}


function findUserByUserEmail(req, res) {
	userDao.findByUserEmail(req.params.email).
	    then((data) => {
	        res.send(data);
	    })
	    .catch((error) => {
	        console.log(error);
	    });	
}


function findUserById(req, res) {
	console.log(req.params.id);
	userDao.findById(req.params.id).
	    then((data) => {
	        res.send(data);
	    })
	    .catch((error) => {
	        console.log(error);
	    });	
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

function registerUser(req, res) {
    const password = generator.generate({
	    length: 10,
	    numbers: true
	  });


  let user = {
	    email: req.body.email,
	    f_name: req.body.f_name,
	    l_name: req.body.l_name,
	    user_level : req.body.user_level,
	    company_id : req.body.company_id,
	    business_id : req.body.business_id,
	    photo : req.body.photo,
	    phone: req.body.phone,
	    user_id : req.body.user_id,
	    temporary_password : password, 
	    created: (new Date()).toISOString(),
	    modified: req.body.modified
  	};
    userDao.registerUser(user).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateUser(req, res) {

  let user = {
	    f_name: req.body.f_name, 
	   	l_name: req.body.l_name,
	    user_level: req.body.user_level,
	    about: req.body.about,
	    photo: req.body.photo,
	    phone: req.body.phone,
	    active: req.body.active,
	    verified: req.body.verified,
	    user_level: req.body.user_level,
	    business_id: req.body.business_id,
	    company_id: req.body.company_id 
  	};

  	userDao.updateUser(user, req.params.id).
	    then((data) => {
	        res.status(200).json({
	            message: "User updated successfully",
	            user: user
	        })
	    })
	    .catch((error) => {
	        console.log(error);
	    });
   
}

function deleteUserById(req, res){
	userDao.deleteUserById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "User deleted successfully",
                user: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = userController;




