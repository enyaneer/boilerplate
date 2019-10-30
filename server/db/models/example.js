const Sequelize = require('sequelize');
const db = require('../database');

const exampleModel = db.define('example', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT,
  }
})


module.exports = exampleModel
