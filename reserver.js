var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservation = [];
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

    console.log(request);

    if (reservation.length <= 5) {
        reservation.push(request)
    } else {
        waitList.push(request)
    };
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});