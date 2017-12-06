//构建路由对象
//

var path  =require("path"); //解决文件路径的问题

var renderHTML= require("./render");
var router = {

	"/login":function(res){

		//fs 操作文件基于 node 执行的路径
		var pathname = path.join(__dirname,"../html/login.html");
		renderHTML(pathname,res)
	},

	"/register":function(res){
		var pathname = path.join(__dirname,"../html/register.html");
		
		renderHTML(pathname,res)
	},

	"/home":function(res){
		var pathname = path.join(__dirname,"../html/home.html");
		renderHTML(pathname,res)
	},

	"/list":function(res){
		var pathname = path.join(__dirname,"../html/list.html");
		renderHTML(pathname,res)
	},

	"/404":function(res){
		var pathname = path.join(__dirname,"../html/error.html");
		renderHTML(pathname,res)
	},


	"/js":function(res,jspathname){
		console.log(jspathname);// /js/home.js
		var pathname = path.join(__dirname,".."+jspathname);
		console.log(pathname);
		renderHTML(pathname,res);
	}

}

module.exports = router;



