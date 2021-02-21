const Sequelize = require('sequelize');
const db = require('../config/database');

const Building = db.define('building', {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    postal_code: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },    
    region: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    neighborhood: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    website_template: {
      type: Sequelize.BOOLEAN
    },
    apartment: {
      type: Sequelize.BOOLEAN
    },
    amenities: {
      type: Sequelize.BOOLEAN
    },
    photos: {
      type: Sequelize.BOOLEAN
    },
    payments: {
      type: Sequelize.BOOLEAN
    },
    company: {
      type: Sequelize.INTEGER
    }   
});



module.exports = Building;
