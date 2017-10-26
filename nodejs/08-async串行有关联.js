/**
 * Created by Administrator on 2017/8/4.
 */
var async =require("async");

function task1(callback){
    setTimeout(function(){
        console.log("task1完成")
        callback(null,"task1结果")
    },1000);
}

function task2(q,callback){
    console.log("task1给task2 的结果--"+q);
    setTimeout(function(){
        callback(null,"task2结果")
    },1000);
}

function task3(q,callback){
    console.log("task2给task3的结果--"+q)
    setTimeout(function(){
        callback(null,"task3")
    },1000);
}
// 请求完第一个接口，把数据给第二个，请求第二个，把第二个的数据给第三个
async.waterfall([task1,task2,task3],function(err,result){
    console.log(result);
})
