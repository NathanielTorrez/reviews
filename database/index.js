let {login} = require('/config.js');
let mySql = require('mySql');

let connection = mySql.createConnection(login);
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('connected as id ' + connection.threadId);
  }
});