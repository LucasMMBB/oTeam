var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var team = new Schema({
	firstname : String,
	lastname : String,
	admin: Boolean
});

var Member = mongoose.model('Member', team);

module.exports = Member;
