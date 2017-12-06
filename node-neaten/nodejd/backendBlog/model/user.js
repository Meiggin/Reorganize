var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var obj = {
	name:String,
	password:String,
	telphone:String
};
var model = mongoose.model('user',new Schema(obj))
module.exports = model;