var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var obj = {
	author:String,
	title:String,
	content:String
};
var model = mongoose.model('article',new Schema(obj))
module.exports = model;