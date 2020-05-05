//const aws = require('aws-sdk');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3003;
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/reviews', (req, res) => {
  const { id } = req.query;

  db.query(`SELECT * FROM reviews WHERE home_id = ${id};`, (err, results) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.send(results);
    }
  });
});

app.get('/ratings', (req, res) => {
  const { id } = req.query;

  db.query(`SELECT * FROM ratings WHERE home_id = ${id};`, (err, results) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      res.send(results);
    }
  });
});

app.get('/api/pictures', () => {
});


app.listen(port, () => { console.log(`listening on port ${port}`); });
