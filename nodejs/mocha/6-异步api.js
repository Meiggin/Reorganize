//mocha  --timeout 5000 设置超时时间

var chai = require('chai');
var expect = chai.expect;
var axios= require("axios");
describe("异步测试js文件",function(){

    it('异步请求应该返回一个对象', function() {
        return axios.get('http://localhost:3000/users')
            .then(function(json) {
                expect(json.data).to.be.an('string');
            });
    });
})