var express = require('express');
var User = require('../model/user')
var md5 = require('md5');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('register', { title: '个人注册' ,isShow:false});
});

router.post('/',function(req,res){
	// console.log(req.body)
	//查询数据库是否重名
	//
	User.find({
		name:req.body.username
	}).then(result=>{
		if(result.length==0){
			User.create({
				name:req.body.username,
				password:md5(req.body.password),
				telphone:req.body.telphone
			}).then(result=>{
				console.log(result)
				res.redirect('/login');
			})
		}else{
			res.render('register', { title: '个人注册',isShow:true});

		}
	})

});

module.exports = router;
