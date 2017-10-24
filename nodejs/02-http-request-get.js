// var http = require('http');
var https = require("https");

var fs = require("fs");
const options = {
  hostname: 'www.lagou.com',
  port: 443,   // http 默认的端口号是80， https默认的端口号是443
  path: '/',
  method: 'GET',
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   'Content-Length': Buffer.byteLength(postData)
  // }
};


var req = https.request(options,function(res){

    var data = "";
    res.on("data",function(chunk){
      data += chunk;
    }) //分段收集爬回来的数据

    res.on("end",function(){
      //此时所有的数据都收集完了
      console.log(data);

      fs.writeFile("./kerwintest/lagou.html",data,function(error){
        if(!error){
          console.log("success");
        }
      })
    })

})

req.end();
