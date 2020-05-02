var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3003;
var db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get("/reviews", (req, res) => {

  db.query('SELECT * FROM reviews;', (err, results) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.send(results);
    }
  });
});


app.listen(port, () => { console.log(`listening on port ${port}`);});