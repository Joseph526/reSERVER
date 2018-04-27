var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [];
var waitList = [];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/api/reservation", function (req, res) {
    var newReservation = req.body;

    console.log(newReservation);

    if (reservations.length < 5) {
        reservations.push(newReservation)
        console.log("RESERVATIONS: " + reservations)
        console.log(reservations.length)
    } else {
        waitList.push(newReservation)
        console.log("WAIT LIST: " + waitList)
        console.log(waitList.length)
    };
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});