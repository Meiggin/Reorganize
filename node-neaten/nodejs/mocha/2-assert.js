var chai = require('chai')
var assert = chai.assert;

describe('assert Demo', function () {
    it('use assert lib', function () {
        var value = "hello";
        assert.typeOf(value, 'string')
        assert.equal(value, 'hello')
        assert.lengthOf(value, 5)

        var result = limit(-5);
        assert.equal(result,0,"这个结果是调用我写的方法的，应该是等于0的");
        assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
    })
})

function limit(num) {
    if (num < 0) {
        return 0;
    }
    return num;
};

