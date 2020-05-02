const mySql = require('mysql');
const login = require('./config.js');

const connection = mySql.createConnection(login);

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('connected');
});

module.exports = connection;
