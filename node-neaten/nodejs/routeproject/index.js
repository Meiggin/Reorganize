var http = require("http"); //加载引入nodejs 提供的http模块。创建服务器
var url = require("url");
var router = require("./module/router");

http.createServer(function(req,res){
	//req 浏览器端传给后台的东西
	//res 后台给浏览器返回东西
	if(req.url=="/favicon.ico"){
		return ;
	}
	var path  =url.parse(req.url).pathname;
	
	try{
		router[path](res);

	}catch(e){
		//捕获异常
		//
		var reg= /^\/js\/\w+\.js$/; //匹配js路径的请求
		if(reg.test(path)){
			router["/js"](res,path);
		}else{
			router["/404"](res);
		}
		
	}

}).listen(3000);

