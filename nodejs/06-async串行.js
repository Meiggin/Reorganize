/**
 * Created by Administrator on 2017/8/4.
 */
var async =require("async"); //npm install --save async
//es6 promsie 解决前端开发中的回调地狱问题，将异步的流程用同步的方式表达出来
// promise.all([test1(),test2(),test(3)]).then(function(){})

//async 第三方的node模块 ，解决回调地狱问题

function test1(callback){
    setTimeout(() => {
        
        console.log("任务1完成");
        callback(null,"111111");
    }, 1000)
}

function test2(q,callback){
    console.log("接受第一个请求回来的结果--",q);
    setTimeout(() => {
        
        console.log("任务2完成");
         callback(null,"22222");   
    }, 2000)
}

function test3(q,callback){
    console.log("接受第二个请求回来的结果--",q);
    setTimeout(() => {
        
        console.log("任务3完成");
         callback(null,"33333");
    }, 3000)
}
//1. 串行执行 没有联系
// async.series([test1,test2,test3],function(error,result){
//     console.log(result);
// })
// 
// 2. 串行指令 有联系
// 
async.waterfall([test1,test2,test3],function(error,result){
    console.log(result);
})