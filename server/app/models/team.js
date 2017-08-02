var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var team = new Schema({
	firstname : String,
	lastname : String,
	admin: Boolean,
	username:{type: String, required: true, unique: true}
	password:{type: String, required: true}
});

var Member = mongoose.model('Member', team);

module.exports = Member;
