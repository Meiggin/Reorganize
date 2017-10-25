var fs =require("fs");

fs.mkdir("./kerwintest",function(error,info){
	if(!error){
		console.log("success");
	}else{
		console.log(error);
	}
})