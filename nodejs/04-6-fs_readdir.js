/**
 * Created by Administrator on 2017/2/12.
 */
var fs = require("fs");

//读取logs文件夹下面的信息
fs.readdir("./kerwintest",function(error,info){
    console.log(info);
})

