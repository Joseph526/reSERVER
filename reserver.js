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

app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

app.post("/api/reservation", function (req, res) {
    var newReservation = req.body;

    console.log(newReservation);

    if (reservations.length < 5) {
        reservations.push(newReservation)
    } else {
        waitList.push(newReservation)
        console.log(waitList.length)
    };
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});