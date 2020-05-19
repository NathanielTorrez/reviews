const mySql = require('mysql');
const { login , login2 } = require('./config.js')

const connection = mySql.createConnection(login);

connection.connect((err) => {
  if (err) {
    mySql.createConnection(login2);
  } else {
    console.log('connected');
  }
});

module.exports = connection;
