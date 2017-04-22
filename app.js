// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Port and Express 
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// holds list of customers
var guestList = [];

// new guest constructor
function Guest (name, phone, email, id) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.id = id
}


var makeReservation = function () {};
// Get values from user
// calls gest constructor 
// Push into array - list of reservations 


var viewTable = function () {};

// LISTENER =================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// ROUTES ===================================
//
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

