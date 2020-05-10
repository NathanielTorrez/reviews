/* eslint-disable no-console */
const db = require('./index.js');
const seedPhotos = require('../aws/photos.js');

const seedUsers = () => {
  const names = [
    'Ignatius Wong',
    'Price Slater',
    'Aladdin Olsen',
    'Talon Cunningham',
    'Travis Compton',
    'Ian Ayala',
    'Fitzgerald Cummings',
    'Jonah Rosario',
    'Hyatt Ryan',
    'Dominic Battle',
    'Reese Mclean',
    'Bert Hull',
    'Galena Deleon',
    'Gisela Gallegos',
    'Sydnee Rice',
    'Hilary Beard',
    'Nathaniel Torrez',
    'Brian deCoach',
    'Devin reuschel',
    'Spencer Ng'];

  for (let i = 0; i < 100; i += 1) {
    const randomIndex = Math.floor(Math.random() * 20);
    const name = names[randomIndex];
    db.query(`INSERT INTO users (_name) values("${name}");`, (err) => {
      if (err) {
        console.log(err);
      } else {
       // console.log('success');
      }
    });
  }
  seedPhotos();
};

const seedRatings = () => {
  for (let i = 1; i < 101; i += 1) {
    const cleanliness = (Math.floor(Math.random() * (4 - 1 + 1)) + 1)
      + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    const accuracy = (Math.floor(Math.random() * (4 - 1 + 1)) + 1)
      + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    const communication = (Math.floor(Math.random() * (4 - 1 + 1)) + 1)
      + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    const checkin = (Math.floor(Math.random() * (4 - 1 + 1)) + 1)
      + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    const location = (Math.floor(Math.random() * (4 - 1 + 1)) + 1)
      + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    const value = (Math.floor(Math.random() * (4 - 1 + 1)) + 1)
    + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    let rating = (cleanliness + accuracy + communication + checkin + location + value) / 6;
    const homeId = i;
    rating = rating.toString();
    rating = rating.substring(0, 3);
    rating = parseFloat(rating);


    db.query(`INSERT INTO ratings(cleanliness, accuracy, communication, _checkin, _location, _value, rating, home_id) VALUES(${cleanliness}, ${accuracy}, ${communication}, ${checkin}, ${location}, ${value}, ${rating}, ${homeId});`, (err) => {
      if (err) {
        console.log(err);
      } else {
        //console.log('success');
      }
    });
  }
};

const seedReviews = () => {
  const verbs = ['liked', 'loved', 'hated', 'disliked', 'enjoyed'];
  const nouns = ['view', 'room', 'bed', 'balcony', 'amenities', 'surroundings', 'host'];
  const adjectives = ['beautiful', 'peaceful', 'cozy', 'fun', 'little', 'huge', 'gorgeous', 'terrible', 'loud', 'smelly'];
  const adverbs = ['very much', 'sorta', 'kinda', 'very', 'very much'];
  const returnings = ['be coming back', 'NOT be returning', 'be making this my go to place', 'be staying here again because of that'];
  const months = ['-01-01', '-02-01', '-03-01', '-04-01', '-05-01', '-06-01', '-07-01', '-08-01', '-09-01', '-10-01', '-11-01', '-12-01'];
  const years = [];

  for (let i = 2010; i < 2020; i += 1) {
    const year = `${i}`;
    years.push(year);
  }

  for (let i = 0; i < 2000; i += 1) {
    const noun = nouns[Math.floor(Math.random() * 7)];
    const adjective = adjectives[Math.floor(Math.random() * 10)];
    const adverb = adverbs[Math.floor(Math.random() * 5)];
    const verb = verbs[Math.floor(Math.random() * 5)];
    const returning = returnings[Math.floor(Math.random() * 4)];

    let user = Math.floor(Math.random() * 101);
    if (user < 1) {
      user = 1;
    }
    const homeID = (Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    const review = `The ${noun} was ${adverb} ${adjective}. I ${verb} this, I will ${returning} .`;
    const hostResponse = Math.floor(Math.random() * 101);
    const date = years[Math.floor(Math.random() * 10)] + months[Math.floor(Math.random() * 12)];


    db.query(`INSERT INTO reviews(review_text , user, home_id, fullDate, host_response_id ) VALUES("${review}", ${user}, ${homeID},"${date}", ${hostResponse});`, (err) => {
      if (err) {
        console.log(err);
      } else {
       // console.log('success');
      }
    });
  }
};

const seedHost = () => {
  const hostResponse = ['Thanks so much for leaving a review', 'I will take this feedback into account', 'Regardless of the feedback I appreciate it thank you', 'Awesome have a nice day'];
  const months = ['-01-01', '-02-01', '-03-01', '-04-01', '-05-01', '-06-01', '-07-01', '-08-01', '-09-01', '-10-01', '-11-01', '-12-01'];
  const years = [];

  for (let i = 2010; i < 2020; i += 1) {
    const year = `${i}`;
    years.push(year);
  }

  for (let i = 0; i < 300; i += 1) {
    const response = hostResponse[Math.floor(Math.random() * 4)];
    const date = years[Math.floor(Math.random() * 10)] + months[Math.floor(Math.random() * 12)];
    const homeID = (Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    const name = Math.floor(Math.random() * 101);
    const reviewID = Math.floor(Math.random() * 1500);

    db.query(`INSERT INTO host(response_text, _name , home_id , fullDate ,reviewID) VALUES("${response}", ${name}, ${homeID}, "${date}", ${reviewID});`, (err) => {
      if (err) {
        console.log(err);
      } else {
        //console.log('success');
      }
    });
  }
};

const seed = () => {
  seedUsers();
  seedReviews();
  seedRatings();
  seedHost();
};
seed();
