const { Sequelize } = require('sequelize');
const { databaseConfig } = require('~/config/appConfig');

const sequelize = new Sequelize(databaseConfig);

module.exports = sequelize;
