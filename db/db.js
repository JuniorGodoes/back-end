const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('oficinaexcel', 'oficinaexcel', 'Oficina@17', {
  host: 'mysql.uhserver.com',
  dialect: 'mysql'
});

module.exports = sequelize