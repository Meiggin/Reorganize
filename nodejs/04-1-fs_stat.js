var fs = require("fs"); //加载 引入 nodejs 提供的fs  模块,操作本地文件系统

fs.stat("./filestream",function(error,info){
	// console.log(11)
	if(!error){
		console.log(info);

		console.log(info.isFile());
		console.log(info.isDirectory());
	}else{
		console.log(error);
	}
})