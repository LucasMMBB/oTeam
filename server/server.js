// SERVER.JS
var express = require('express');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var router = express.Router();


app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

// set up
mongoose.connect('mongodb://maoxul:Lmx931220@ds143201.mlab.com:43201/dreamteamlist');
//mongoose.connect('mongodb://localhost/team');

var Member = require('./app/models/team');

router.route('/team')
	.post(function(req, res){
		var person = new Member();
		person.firstname = req.body.firstname;
		person.lastname = req.body.lastname;
		person.admin = req.body.admin;

		person.save(function(err){
			if(err){
				res.send(err);
			}
			res.json({message: "new Person created!"});
		});
	})
	.get((req, res)=>{
		Member.find((err, members)=>{
			if(err){
				res.send(err);
			}

			res.json(members);
		});
	});

router.get('/', function(req, res){
    res.json({message: 'welcome to my API!'});
});

app.use('/api', router);

app.listen(port);
console.log("listening port on: " + port);
