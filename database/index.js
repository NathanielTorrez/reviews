var login = require('./config.js');
var mySql = require('mysql');

var connection = mySql.createConnection(login);

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected');
  return;
});



module.exports = connection;

//brew install aws cli