const Sequelize = require('sequelize');
const db = require('../config/database');

const Lead = db.define('lead', {
    business_id: {
      type: Sequelize.INTEGER
    },
    first_name: {
      type: Sequelize.TEXT
    },
    last_name: {
      type: Sequelize.TEXT
    }, 
    email: {
      type: Sequelize.TEXT
    }, 
    phone: {
      type: Sequelize.TEXT
    }, 
    reason: {
      type: Sequelize.STRING
    },
    progress: {
      type: Sequelize.INTEGER
    },
    residence: {
      type: Sequelize.STRING
    },
});



module.exports = Lead;
