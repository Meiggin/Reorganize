var express = require('express');
var User = require('../model/user')
var md5 = require('md5')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login', { title: '欢迎登陆' ,isShow:false});
});

router.post('/',function(req,res){
	User.find({
		name:req.body.username,
		password:md5(req.body.password)
	}).then(result=>{
		console.log(result)
		if(result.length==0){

			res.render('login', { title: '欢迎登陆' ,isShow:true});
		}else{
			req.session.kerwinInfo = result[0];
			res.cookie('currentUser',result[0].name);
			res.redirect('/');
		}
	})
})
module.exports = router;
