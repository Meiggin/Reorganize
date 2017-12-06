/**
 * Created by Administrator on 2017/8/4.
 */

var async =require("async");

function task1(callback){
    setTimeout(function(){
        console.log("task1完成")
        callback(null,"task1")
    },1000);
}

function task2(callback){
    setTimeout(function(){
        console.log("task2完成")
        callback(null,"task2")
    },1000);
}

function task3(callback){
    setTimeout(function(){
        console.log("task3完成")
        callback(null,"task3")
    },3000);
}

async.parallel([task1,task2,task3],function(err,result){
    //es6 promsie 所有请求都结束， loading框消失 promise.all
    console.log(result);

    //res.write("");
})