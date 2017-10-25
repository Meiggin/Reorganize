var fs =require("fs");

//要删除有文件的文件夹（首先同步删除所有的文件）
//
var all = fs.readdirSync("./kerwintest");

console.log(all);


all.forEach((item) => {
  fs.unlinkSync(`./kerwintest/${item}`); //删除文件
})

fs.rmdir("./kerwintest",function(error){
	if(!error){
		console.log("rm success");
	}else{
		console.log(error);
	}
})