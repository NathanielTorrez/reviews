var db = require('./index.js')

var seedUsers = () => {
  var names =  [
     "Ignatius Wong",
     "Price Slater",
     "Aladdin Olsen",
     "Talon Cunningham",
     "Travis Compton",
     "Ian Ayala",
     "Fitzgerald Cummings",
     "Jonah Rosario",
     "Hyatt Ryan",
     "Dominic Battle",
     "Reese Mclean",
     "Bert Hull",
     "Galena Deleon",
     "Gisela Gallegos",
     "Sydnee Rice",
     "Hilary Beard",
     "Nathaniel Torrez",
     "Brian deCoach",
     "Devin reuschel",
     "Spencer Ng"]

    for (var i = 0; i < 100; i++) {
      var randomIndex = Math.floor(Math.random() * 20 )
      var name  = names[randomIndex];
      db.query(`INSERT INTO users (_name) values("${name}");`, (err, results) => {
        if (err) {
          console.log(err)
        } else {
          console.log('success')
        }
      })
    }

}

let seedRatings = () => {



  for (var i = 1; i < 101; i++) {
    var cleanliness = (Math.floor(Math.random() * (4 - 1 + 1)) + 1) + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    var accuracy = (Math.floor(Math.random() * (4 - 1 + 1)) + 1) + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    var communication = (Math.floor(Math.random() * (4 - 1 + 1)) + 1) + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    var _checkin = (Math.floor(Math.random() * (4 - 1 + 1)) + 1) + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    var _location = (Math.floor(Math.random() * (4 - 1 + 1)) + 1) + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    var _value = (Math.floor(Math.random() * (4 - 1 + 1)) + 1) + ((Math.floor(Math.random() * (10 - 1 + 1)) + 1) / 10);
    var rating = (cleanliness + accuracy + communication + _checkin + _location + _value) / 6;
    var home_id = i
    rating = rating.toString();
    rating = rating.substring(0, 3);
    rating = parseFloat(rating);
    var home_id = i;

    db.query(`INSERT INTO ratings(cleanliness, accuracy, communication, _checkin, _location, _value, rating, home_id) VALUES(${cleanliness}, ${accuracy}, ${communication}, ${_checkin}, ${_location}, ${_value}, ${rating}, ${home_id});`, (err,results) => {
      if (err) {
        console.log(err)
      } else {
        console.log('success')
      }
    })
  }
}

let seedReviews = () => {

  var verbs = ["liked", "loved", "hated", "disliked", "enjoyed"]
  var nouns = ["view", "room", "bed", "balcony", "amenities", "surroundings", "host"]
  var adjectives = ["beautiful", "peaceful", "cozy", "fun", "little", "huge", "gorgeous", "terrible", "loud", "smelly"]
  var adverbs = ["very much", "sorta", "kinda", "very", "very much"]
  var returnings = ["be coming back", "NOT be returning", "be making this my go to place", "be staying here again because of that"]
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"]
  var years = []

  for (var i = 2000; i < 2020; i++) {
    var year = " " + i + "";
    years.push(year);
  }

  for (var i = 0; i < 2000; i++) {
  var noun = nouns[Math.floor(Math.random() * 7)]
  var adjective = adjectives[Math.floor(Math.random() * 10)]
  var adverb = adverbs[Math.floor(Math.random() * 6)]
  var verb = verbs[Math.floor(Math.random() * 5)]
  var returning = returnings[Math.floor(Math.random() * 4)]

  var user = Math.floor(Math.random() * 101)
  var homeID = (Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  var review = "The " + noun +  " was " + adverb + " " + adjective + ". I " + verb + " this, I will " + returning +" ." ;
  var hostResponse = Math.floor(Math.random() * 101);
  var _date =    months[Math.floor(Math.random() * 12) ] + years[Math.floor(Math.random() * 20)]




  db.query(`INSERT INTO reviews(review_text , user, home_id, _date, host_response_id ) VALUES("${review}", ${user}, ${homeID},"${_date}", ${hostResponse});`, (err)=> {
    if (err) {
      console.log(err)
    } else {
      console.log('success')
    }
  })
  }
}

let seedHost = () => {

  var hostResponse = ["Thanks so much for leaving a review", "I will take this feedback into account", "Regardless of the feedback I appreciate it thank you", "Awesome have a nice day"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"];
  var years = [];

  for (var i = 2000; i < 2020; i++) {
    var year = " " + i + "";
    years.push(year);
  }

  for (var i = 0; i < 300; i++) {
    var response = hostResponse[Math.floor(Math.random() * 4 )];
    var _date    = months[Math.floor(Math.random() * 12) ] + years[Math.floor(Math.random() * 20)];
    var homeID = (Math.floor(Math.random() * (100 - 1 + 1)) + 1);
    var name = Math.floor(Math.random() * 101)
    var reviewID = Math.floor(Math.random() * 1500)

    db.query(`INSERT INTO host(response_text, _name , home_id , _date ,reviewID) VALUES("${response}", ${name}, ${homeID}, "${_date}", ${reviewID});`, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('success')
      }
    })
  }
}

let seed = () => {
  seedUsers()
  seedReviews()
  seedRatings()
  seedHost()
}
seed()