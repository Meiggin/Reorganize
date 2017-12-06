/**
 * Created by Administrator on 2017/2/12.
 */
var fs = require("fs");

//
fs.readFile("filestream/data.json","utf8",function(error,info){
   if(!error){
       console.log(info);
   }else{
       console.log(error);
   }
})

