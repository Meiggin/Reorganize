var express = require('express');
var router = express.Router();
var Article =require("../model/article");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/list",function(req,res){	
	var offset = req.query.offset;
	var limit = req.query.limit;
	// .then(result=>{
	// 	res.send(result);
	// })

	Promise.all([Article.find({},{},{limit:limit,skip:offset}),Article.count()]).then(result=>{
		res.send({
			total:result[1],
			list:result[0]
		});
	})
	   
})

module.exports = router;
