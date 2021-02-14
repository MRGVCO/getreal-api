const Sequelize = require('sequelize');
const db = require('../config/database');

const Apartment = db.define('apartment', {
    title: {
      type: Sequelize.STRING
    },
    apt_number: {
      type: Sequelize.STRING
    },
    bedrooms: {
      type: Sequelize.INTEGER
    },
    business_id: {
      type: Sequelize.INTEGER
    },
    bathrooms: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.INTEGER
    },
    availability: {
      type: Sequelize.STRING
    },
    amenities: {
      type: Sequelize.JSON
    },
    description: {
      type: Sequelize.STRING
    },
    size : {
      type: Sequelize.INTEGER
    },
    on_market : {
      type: Sequelize.BOOLEAN
    },
    featured: {
      type: Sequelize.BOOLEAN
    }
});



module.exports = Apartment;
