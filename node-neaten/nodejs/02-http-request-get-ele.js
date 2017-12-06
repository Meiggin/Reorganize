// var http = require('http');
var https = require("https");
var http = require("http");


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
        callback(data);//回调函数的调用
      })

  })

  req.end();


}

http.createServer(function(req,res){

   if(req.url=="/ele"){

      //爬虫数据

      spider(function(data){
        // console.log(data);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.write(data)
        res.end(); 
      })         
   }
}).listen(3000);



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
//2.  事件监听
//3.  Promise



// $.ajax({
//   url:"1.php",

//   success:function(res){

//       $.ajax({
//         url:"2.php",
//         success:function(res){
//             $.ajax({
//               url:"3.php",
//               success:function(){

//               }
//             })
//         }
//       })
//   }
// })
// 
