var express= require("express");
var router = express.Router();


router.get("/",function(req,res){

	//获取浏览器自动传来的cookie
	console.log(req.cookies);
	res.render("login",{isShowError:false});
})

router.get("/validate",function(req,res){

	//req.query
	console.log(req.query);


	if(req.query.username=="kerwin" && req.query.password=="123"){
		//用户名密码匹配成功，跳转
		res.redirect("/") ;// 重定向到哪个页面
	}else{
		res.render("login",{});
	}
})


router.post("/validate",function(req,res){
	console.log(req.body);
	if(req.body.username=="kerwin" && req.body.password=="123"){
		//设置cookie
		res.cookie("isLogin","ok");
		//用户名密码匹配成功，跳转
		res.redirect("/") ;// 重定向到哪个页面
	}else{
		res.render("login",{isShowError:true});
	}
})

module.exports = router;