var express = require('express');
var User = require('../model/user')
var md5 = require('md5')
var Article = require('../model/article');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('article', { title: '发表文章' ,name:req.cookies['currentUser'],isNew:true});
});

router.post("/",function(req,res){

	console.log(req.body);

	Article.create({
		// author:req.session.kerwinInfo["name"],
		author:req.cookies["currentUser"],
		title:req.body.title,
		content:req.body.content
	}).then(result=>{
		res.redirect("/");
	})
})  

router.get('/fixed',function(req,res){
	Article.find({
		_id:req.query.id
	}).then(result=>{
		res.render('article', { title: '修改文章' ,name:req.cookies['currentUser'],isNew:false,info:result[0]});
	})
	
});

router.post('/fixed',function(req,res){
	console.log()
	Article.findByIdAndUpdate(req.body.id,{$set:{title:req.body.title,content:req.body.content}}).then(result=>{
		res.redirect('/')
	})
});


router.get('/delete',function(req,res){
	Article.findByIdAndRemove(req.query.id).then(result=>{
		res.redirect('/')
	})
})
module.exports = router;
