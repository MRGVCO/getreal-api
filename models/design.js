const Sequelize = require('sequelize');
const db = require('../config/database');

const Design = db.define('design', {
    business_id: {
      type: Sequelize.INTEGER
    },
    primary: {
      type: Sequelize.TEXT
    },
    secondary: {
      type: Sequelize.TEXT
    },
    header: {
      type: Sequelize.TEXT
    }, 
    copy: {
      type: Sequelize.TEXT
    },
    template: {
      type: Sequelize.INTEGER
    }
});



module.exports = Design;
