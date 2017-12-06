var express = require('express');
var router = express.Router();
var Article = require("../model/article");
/* GET home page. */
router.get('/', function(req, res, next) {

  if(req.session.kerwinInfo){
  	Article.find({
  		author:req.session.kerwinInfo["name"]
  	}).then(result=>{
  		// console.log(result);
  		res.render('index', { title: 'Express',name:req.cookies["currentUser"], list:result});
  	})


  	
  }else{
  	res.redirect("/login"); //重新登录
  }
  
});

//销毁session
router.get("/logout",function(req,res){
	req.session.destroy(()=>{

		res.redirect("/login");
	})
})



module.exports = router;

