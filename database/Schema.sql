CREATE DATABASE review;

USE review;

CREATE TABLE users (ID int PRIMARY KEY AUTO_INCREMENT, name Varchar(30), photo_url Varchar(60) );
CREATE TABLE reviews (ID int PRIMARY KEY AUTO_INCREMENT, review_text Varchar(300) user int, home_id int );
CREATE TABLE  ratings (ID int PRIMARY KEY AUTO_INCREMENT, cleanliness int, accuracy int, communication int, _checkin int, _location int, _value int, rating int, home_id int);


