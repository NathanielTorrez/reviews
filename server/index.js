/* eslint-disable no-console */
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3003;
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/reviews', (req, res) => {
  const { id } = req.query;

  db.query(`select * from reviews inner join users on users.ID = reviews.user where home_id=${id} order by fullDate desc;`, (err, results) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      const conformData = (data) => {
        const conformedArray = [];
        for (let i = 0; i < data.length; i += 1) {
          conformedArray[i] = data[i];
          const fullDateOBj = conformedArray[i].fullDate;
          const fullDate = `${fullDateOBj}`;
          const year = fullDate.substring(11, 15);
          const month = fullDate.substring(4, 7);
          if (month === 'Jan') {
            conformedArray[i].fullDate = `January ${year}`;
          }
          if (month === 'Feb') {
            conformedArray[i].fullDate = `February ${year}`;
          }
          if (month === 'Mar') {
            conformedArray[i].fullDate = `January ${year}`;
          }
          if (month === 'Apr') {
            conformedArray[i].fullDate = `April ${year}`;
          }
          if (month === 'May') {
            conformedArray[i].fullDate = `May ${year}`;
          }
          if (month === 'Jun') {
            conformedArray[i].fullDate = `June ${year}`;
          }
          if (month === 'Jul') {
            conformedArray[i].fullDate = `July ${year}`;
          }
          if (month === 'Aug') {
            conformedArray[i].fullDate = `August ${year}`;
          }
          if (month === 'Sep') {
            conformedArray[i].fullDate = `September ${year}`;
          }
          if (month === 'Oct') {
            conformedArray[i].fullDate = `October ${year}`;
          }
          if (month === 'Nov') {
            conformedArray[i].fullDate = `November ${year}`;
          }
          if (month === 'Dec') {
            conformedArray[i].fullDate = `December ${year}`;
          }
        }
        return conformedArray;
      };
      const newResults = conformData(results);
      res.send(newResults);
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

app.get('/search', (req, res) => {
  console.log(req.query);
  const { id } = req.query;
  const { term } = req.query;

  db.query(`select * from reviews inner join users on users.ID = reviews.user where home_id=${id} AND review_text LIKE '%${term}%' order by fullDate desc;`, (err, results) => {
    if (err) {
      res.status(404);
      res.end();
    } else {
      res.status(200);
      const conformData = (data) => {
        const conformedArray = [];
        for (let i = 0; i < data.length; i += 1) {
          conformedArray[i] = data[i];
          const fullDateOBj = conformedArray[i].fullDate;
          const fullDate = `${fullDateOBj}`;
          const year = fullDate.substring(11, 15);
          const month = fullDate.substring(4, 7);
          if (month === 'Jan') {
            conformedArray[i].fullDate = `January ${year}`;
          }
          if (month === 'Feb') {
            conformedArray[i].fullDate = `February ${year}`;
          }
          if (month === 'Mar') {
            conformedArray[i].fullDate = `January ${year}`;
          }
          if (month === 'Apr') {
            conformedArray[i].fullDate = `April ${year}`;
          }
          if (month === 'May') {
            conformedArray[i].fullDate = `May ${year}`;
          }
          if (month === 'Jun') {
            conformedArray[i].fullDate = `June ${year}`;
          }
          if (month === 'Jul') {
            conformedArray[i].fullDate = `July ${year}`;
          }
          if (month === 'Aug') {
            conformedArray[i].fullDate = `August ${year}`;
          }
          if (month === 'Sep') {
            conformedArray[i].fullDate = `September ${year}`;
          }
          if (month === 'Oct') {
            conformedArray[i].fullDate = `October ${year}`;
          }
          if (month === 'Nov') {
            conformedArray[i].fullDate = `November ${year}`;
          }
          if (month === 'Dec') {
            conformedArray[i].fullDate = `December ${year}`;
          }
        }
        return conformedArray;
      };
      const newResults = conformData(results);
      res.send(newResults);
    }
  });
});

app.listen(port, () => { console.log(`listening on port ${port}`); });
