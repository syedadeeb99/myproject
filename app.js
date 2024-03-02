var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/Akshara');
var db = mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var app = express()

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

//Validations
function isValidEmail(email) {
    // Regular expression for basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phone) {
    return /^\d{10}$/.test(phone);
}

app.post('/EventBooking', function (req, res) {
    var eventName = req.body.eventName;
    var eventType = req.body.eventType;
    var dateTime = req.body.dateTime;
    var venue = req.body.venue;
    var description = req.body.description;
    var price = req.body.price;
    var organizerName = req.body.organizerName;
    var organizerPhone = req.body.organizerPhone;

    var eventData = {
        "eventName": eventName,
        "eventType": eventType,
        "dateTime": dateTime,
        "venue": venue,
        "description": description,
        "price": price,
        "organizerName": organizerName,
        "organizerPhone": organizerPhone
    }

    // Save the new event to the database
    db.collection('events').insertOne(eventData, function (err, collection) {
        if (err) {
            console.error("Error saving event:", err);
            return res.status(500).send("Error saving event");
        }
        console.log("Event saved successfully:", eventData);
        return res.redirect('/signup_success.html');
    });
});

app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
    console.log("server listening at port 3000");
});
