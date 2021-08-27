const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: '10.0.2.2', // originally started as localhost, but this connection was refused; it's now being timed out, see here: http://www.dark-hamster.com/programming/how-to-solve-error-message-unhandledpromiserejectionwarning-sequelizeconnectionrefusederror-connect-econnrefused-in-nodejs-application/ and here: https://stackoverflow.com/questions/9808560/why-do-we-use-10-0-2-2-to-connect-to-local-web-server-instead-of-using-computer
    dialect: 'mysql',
    port: 3001
  });
}

module.exports = sequelize;
