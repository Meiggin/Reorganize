describe("测试kerwin的一个js文件",function(){

    context("1-关于限制方法的测试",function(){
        it("if send 0, expect 0",function(){
            //测试代码
        })

        it("if send 1, expect 1",function(){
            //测试代码
            if(0==limit(0)){
                return false;
            }

        })

        it("if send 2, expect 2",function(){
            //测试代码
            // limit(-5)
        })
    })

    context("2-match method",function(){

    })
})


function limit(num) {
    if (num < 0) {
        return 0;
    }
    return num;
};
