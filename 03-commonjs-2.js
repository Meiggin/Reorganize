var http = require('http');
var render= require("./kerwinModule/renderHTML");
var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return ;
    }

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write(render(req.url));
    res.end();
})

server.listen(3000,()=>{
    console.log("server start111");
})
