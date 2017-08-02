// SERVER.JS
var express = require('express');
var app = express();
var parser = require('body-parser');

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
