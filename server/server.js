// SERVER.JS
var express = require('express');
var app = express();
var parser = require('body-parser');

// set up
var mongoose = require('mongoose');
//mongoose.connect('mongodb://maoxul:Lmx931220@ds143201.mlab.com:43201/dreamteamlist');
mongoose.connect('mongodb://localhost/team');

var Member = require('./app/models/team');

app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res){
    res.json({message: 'welcome to my API!'});
});

app.use('/api', router);

app.listen(port);
console.log("listening port on: " + port);
