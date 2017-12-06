//mocha  --timeout 5000 设置超时时间

var chai = require('chai');
var expect = chai.expect;

describe("异步测试js文件",function(){

    it('异步请求应该返回一个对象', function(done) {

        setTimeout(function(){
            var obj = {name:"kerwin"};
            expect(obj).to.be.an('object');

            done();
        },1000)
    });
})