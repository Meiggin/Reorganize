function test1(){

  return new Promise(function(resolve,reject){
      setTimeout(() => {
        console.log("11111");
          resolve("11111")
      }, 1000)
  })
}

function test2(){

  return new Promise(function(resolve,reject){
      setTimeout(() => {
        console.log("22222");
          resolve("22222")
      }, 2000)
  })
}

function test3(){

  return new Promise(function(resolve,reject){
      setTimeout(() => {
        console.log("33333");
          resolve("33333")
      }, 1500)
  })
}

// test1().then(function(res1){
//   return test2(res1);
// }).then(function(res2){
//   return test3(res3);
// }).then(function(res){

// })
//


Promise.all([test1(),test2(),test3()]).then(function(res){
  console.log(res);
  //隐藏对话框
  //页面布局
})

/*
  用同步的思想来解决异步的流程。
  
  1. 解决回调地狱
  2. 等待所有异步结束后，再执行一件事

 */