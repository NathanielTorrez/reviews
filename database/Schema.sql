DROP DATABASE IF EXISTS review;
CREATE DATABASE review;

USE review;

CREATE TABLE users (ID int PRIMARY KEY AUTO_INCREMENT, _name Varchar(30), photo_url Varchar(200));

CREATE TABLE reviews (ID int PRIMARY KEY AUTO_INCREMENT, review_text Varchar(1000), user int, home_id int, fullDate  Date, host_response_id int );
CREATE TABLE host (ID int PRIMARY KEY AUTO_INCREMENT, response_text Varchar(300), _name int, home_id int, fullDate Date, reviewID int );
CREATE TABLE  ratings (ID int PRIMARY KEY AUTO_INCREMENT, cleanliness DECIMAL(3,2), accuracy DECIMAL(3,2), communication DECIMAL(3,2), _checkin DECIMAL(3,2), _location DECIMAL(3,2), _value DECIMAL(3,2), rating DECIMAL(3,2), home_id int);

