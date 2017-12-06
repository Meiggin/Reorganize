// var http = require('http');
var https = require("https");
var http = require("http");

var events = require("events");

var EventEmitter = new events.EventEmitter();
function spider(callback){
    const options = {
    hostname: 'www.ele.me',
    port: 443,   // http 默认的端口号是80， https默认的端口号是443
    path: '/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wwmt70gy6fb&latitude=36.08431&limit=24&longitude=120.37148&offset=0&terminal=web',
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Content-Length': Buffer.byteLength(postData)
    // }
  };

  //异步问题
  var req = https.request(options,function(res){

      var data = "";
      res.on("data",function(chunk){
        data += chunk;
      }) //分段收集爬回来的数据

      res.on("end",function(){
        //此时所有的数据都收集完了
        console.log(data);
        EventEmitter.emit("kerwin",data);
      })

  })

  req.end();


}

http.createServer(function(req,res){

   if(req.url=="/ele"){

      //爬虫数据
      spider();      
      EventEmitter.once("kerwin",function(data){
          //往浏览器端写代码
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.write(data)
        res.end(); 
      })
   }
}).listen(3000);

/*
  events

  监听事件

  （1）on
  （2）once
 */



// function test(){


//   setTimeout(() => {
//     console.log(222);
//     return "11111";
//   }, 1000)

//   console.log(111);
// }

// test();
// 
// 
//异步处理
//
//1、 callback
//2.  事件监听- 订阅发布- 观察者模式
//3.  Promise