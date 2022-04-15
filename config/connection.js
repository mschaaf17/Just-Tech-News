const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
//need do add npm install dotenv in order to use this
//need the jaws if we want to deploy to heroku
let sequelize;

if (process.env.JAWSDB_URL) {
sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  sequelize= new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});
}
module.exports = sequelize;