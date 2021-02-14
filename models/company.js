const Sequelize = require('sequelize');
const db = require('../config/database');

const Company = db.define('company', {
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    buildings: {
       type: Sequelize.JSON
    },
    name: {
      type: Sequelize.STRING
    },
    about: {
      type: Sequelize.TEXT
    },
    photo: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN
    },
    verified: {
      type: Sequelize.BOOLEAN
    },
    userId : {
      type: Sequelize.INTEGER
    }
});



module.exports = Company;
