const AWS = require("aws-sdk");
const generator = require('generate-password');
const CognitoExpress = require("cognito-express");

AWS.config.update({
    accessKeyId: "AKIAJHLOPV4FTQCA7DUA",
    secretAccessKey: "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",
    region: "us-west-2"
});

const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-19",
  region: "us-west-2"
});

const poolData = {
  UserPoolId: 'us-west-2_YNVBFHssb', // your user pool ID
  ClientId: '3gqdfmrrg45j9itktgs9s9dde6', // generated in the AWS console
  Paranoia: 7 // an integer between 1 - 10
};

const CognitoUserPoolWrapper = require('cognito-user-pool')(poolData);

const cognitoExpress = new CognitoExpress({
    region: "us-west-2",
    cognitoUserPoolId: "us-west-2_YNVBFHssb",
    tokenUse: "access", //Possible Values: access | id
    tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});


var authenticateController = {
    adminSignUp: adminSignUp,
    adminDeleteUser : adminDeleteUser,    
    changePassword : changePassword,
    signup : signup,
    confirm : confirm,
    resendConfirm : resendConfirm,
    login : login,
    logout : logout,
    validate : validate,
    profile : profile,
    profileEdit : profileEdit
}



function adminSignUp(req, res) {
  const password = generator.generate({
    length: 10,
    numbers: true,
    symbols : true,
    uppercase : true,
    lowercase : true,
    strict : true
  });

  var poolData = {
    UserPoolId: "us-west-2_YNVBFHssb",
    Username: req.body.email,
    DesiredDeliveryMediums: ["EMAIL"],
    TemporaryPassword: password,
    UserAttributes: [
      {
        Name: "email",
        Value: req.body.email
      },
      {
        Name: "email_verified",
        Value: "true"
      }
    ]
  };

  
  COGNITO_CLIENT.adminCreateUser(poolData, (error, data) => {
    if(error){
      return res.send(error);
    }
    if(data){
      return res.send(data);
    }
  });
}


function adminDeleteUser(req, res) {
      const poolData = {
        UserPoolId: "us-west-2_YNVBFHssb",
        Username: req.body.email,
      };
      
      COGNITO_CLIENT.adminDeleteUser(poolData, (error, data) => {
        if(error){
          return res.send(error);
        }
        if(data){
          return res.send(data);
        }
      });
 }

function changePassword(req, res){
     const params = {
        "username": req.body.email,
        "loginSession": req.body.loginSession,
        "newPassword": req.body.password
      }

    const cb = d =>{
      let data;
      if(data == null){
        data = {data:'success'};
      }
      else{
        data = d;
      }
      return res.send(data);
    }
    CognitoUserPoolWrapper.loginNewPasswordRequired(params, cb)
}

function signup(req, res){
  const password = generator.generate({
    length: 10,
    numbers: true,
    symbols : true,
    uppercase : true,
    lowercase : true
  });
  
  const params = {
    "username": req.body.email,
    "password": password   
  }

  const cb = data =>{
    return res.send(data);
  }
  CognitoUserPoolWrapper.signup(params, cb)
}

function confirm(req, res){
  const cb = data =>{
   return res.send(data);
  }

  const params = {
    "username": req.body.username,
    "confirmationCode": req.body.code   
  }
  CognitoUserPoolWrapper.signupConfirm(params, cb)
}


function resendConfirm(req, res){
  const cb = data =>{
   return res.send(data);
  }
  const params = {
    "username": req.body.username
  }
  CognitoUserPoolWrapper.signupResend(params, cb)
}

function login(req, res){
  const cb = (error, success) =>{
    if(error){
     return res.send(error);   
    }
    else{
     return res.send(success);    
    }
  }

  const params = {
    "username": req.body.username,
    "password": req.body.password   
  }

  CognitoUserPoolWrapper.login(params, cb)
}

function logout(req, res){
  const cb = (error, success) =>{
    if(error){
     return res.send(error);   
    }
    else{
     return res.send(success);    
    }
  }

  const params = {
     "username": req.body.username,
     "idToken": req.body.idToken,
     "accessToken": req.body.accessToken
  }

  CognitoUserPoolWrapper.logout(params, cb)
}

function validate(req, res){
  cognitoExpress.validate(req.body.accessToken, function(err, response) {
    if (err) {
        return res.send(err);           
    } else {
        //Else API has been authenticated. Proceed.
        return res.send(response);    
    }
  });
}

function profile(req, res){
  CognitoUserPoolWrapper.profile(req.body, function(err, response) {
    if (err) {
        return res.send(err);           
    } else {
        //Else API has been authenticated. Proceed.
        return res.send(response);    
    }
  });
}

function profileEdit(req, res){
  CognitoUserPoolWrapper.profileEdit(req.body, function(err, response) {
    if (err) {
        return res.send(err);           
    } else {
        //Else API has been authenticated. Proceed.
        return res.send(response);    
    }
  });
}

module.exports = authenticateController;
