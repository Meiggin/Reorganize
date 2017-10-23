var http = require("http"); //加载引入nodejs 提供的http模块。创建服务器

http.createServer(function(req,res){
	//req 浏览器端传给后台的东西
	//res 后台给浏览器返回东西
	if(req.url=="/favicon.ico"){
		return ;
	}
	
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	res.write(render(req.url));
	res.end();

}).listen(3000);

function render(url){
	switch(url){
		case "/login":

			return "login页面";
		case "/register":

			return "register 页面";

		case "/home":

			return "home页面";

		default:
			return "404";
	}
}


//Content-Type  text/plain text/javascript text/html

