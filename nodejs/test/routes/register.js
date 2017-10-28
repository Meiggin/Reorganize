var express= require("express");
var router = express.Router();

// /register
router.get("/",function(req,res){
	res.render("register",{});
})


// /register/a
router.get("/a",function(req,res){
	res.render("registerchilda",{});
})
// router.get("/b",function(req,res){
// 	res.render("registerchildb",{});
// })
// 
module.exports = router;