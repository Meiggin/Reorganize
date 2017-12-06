var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	var info= "<b>我是从数据库取来的值</b>";

	var list = ["xiaoming","xiaohong","kerwin","tiechui"];
    res.render('index', { title: 'kerwin',myinfo:info ,isShow:false,list:list});
});
		
module.exports = router;
