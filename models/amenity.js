const Sequelize = require('sequelize');
const db = require('../config/database');

const Amenity = db.define('amenity', {
    name: {
      type: Sequelize.TEXT
    }, 
    type: {
      type: Sequelize.STRING
    },
    business_id: {
      type: Sequelize.INTEGER
    },
});



module.exports = Amenity;
