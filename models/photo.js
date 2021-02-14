const Sequelize = require('sequelize');
const db = require('../config/database');

const Photo = db.define('photo', {
    name: {
      type: Sequelize.STRING
    },
    firebaseName: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.JSON
    },
    business_id: {
      type: Sequelize.INTEGER
    },
    url:{
      type: Sequelize.STRING
    },
    uid:{
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    order:{
      type: Sequelize.INTEGER
    },
});



module.exports = Photo;
