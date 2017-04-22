var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var guestList = [];

//holds list of cutomers

//new guest constructor
function Guest (name, phone, email, id) {
	this.name = name;
	this.phone = phone;
	this.email = email;
	this. id = id;
}

var makeReservation = function() {};
//get values from user
//calls guestList constructor function
//push into an array of list of reservations

var viewTable = function() {};

//LISTENER =====================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//ROUTES =======================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req ,res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/tables", function(req ,res) {
	res.sendFile(path.join(__dirname, "tables.html"));
})
