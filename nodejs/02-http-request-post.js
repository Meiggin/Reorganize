var http = require('http');
// var https = require("https");

var querystring = require("querystring");


var postData = querystring.stringify({
    do:'digg',
    action:2,
    id:111169
}) //do=digg&action=2&id=83491

const options = {
  hostname: 'd.onlinedown.net',
  port: 80,   // http 默认的端口号是80， https默认的端口号是443
  path: '/ajax_top_1.4.php',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
    'Referer':'http://d.onlinedown.net/topinfo_1.5.php?id=83491'
  } //伪造请求头
};


var req = http.request(options,function(res){

    var data = "";
    res.on("data",function(chunk){
      data += chunk;
    }) //分段收集爬回来的数据

    res.on("end",function(){
      //此时所有的数据都收集完了
      console.log(data);
    })

})

req.write(postData); //提交post请求

req.end();
