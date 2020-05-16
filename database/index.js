const mySql = require('mysql');

const connection = mySql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'May291998',
  database: 'review',
});

connection.connect((err) => {
  if (err) {
    mySql.createConnection({
      host: '172.17.0.3',
      user: 'root',
      password: 'May291998',
      database: 'review',
    });

  } else {
    console.log('connected');
  }
});

module.exports = connection;
