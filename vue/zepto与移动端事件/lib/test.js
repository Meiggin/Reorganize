/**
 * Created by Administrator on 2017/8/16.
 */

var obj = (function(){

    var item = {};
    function getItem(key){
        return item[key];
    }
    function setItem(key,value){
        item[key] = value
    }
    return {
        getItem:getItem,
        setItem:setItem
    }
})()

function test(){
    var name = "kerwin"
}

test();