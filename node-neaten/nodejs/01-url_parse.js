var http = require("http"); //加载引入nodejs 提供的http模块。创建服务器

var url  =require("url");////加载引入nodejs 提供的url模块，对于地址字符串进行处理

var querystring = require("querystring") ;//nodejs 模块， 转换对象 与特殊结构的一个模块
http.createServer(function(req,res){
    //req 浏览器端传给后台的东西
    //res 后台给浏览器返回东西
    if(req.url=="/favicon.ico"){
        return ;
    }
    //console.log(url.parse(req.url,true));

    var str = "name=kerwin&age=100";

    console.log(querystring.parse(str));

    var str2 = {name:"xiaoming",age:18};
    console.log(querystring.stringify(str2));


    console.log(JSON.stringify(str2));

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write(render(url.parse(req.url).pathname)); //获取请求路径， 
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

