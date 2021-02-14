const Sequelize = require('sequelize');
const db = require('../config/database');

const Email = db.define('email', {
    business_id: {
      type: Sequelize.INTEGER
    },
    mail_to: {
      type: Sequelize.TEXT
    },
    mail_id: {
      type: Sequelize.TEXT
    },
    mail_from: {
      type: Sequelize.TEXT
    }, 
    mail_cc: {
      type: Sequelize.TEXT
    },
    bucket: {
      type: Sequelize.TEXT
    }, 
    status: {
      type: Sequelize.TEXT
    }, 
    subject: {
      type: Sequelize.TEXT
    },
    plain: {
      type: Sequelize.TEXT
    },
    html: {
      type: Sequelize.TEXT
    },
});



module.exports = Email;
