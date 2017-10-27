var fs = require("fs");

function renderHTML(pathname,res){
	fs.readFile(pathname,"utf8",function(error,data){
			if(!error){
				res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
				res.write(data);
				res.end();
			}else{
				console.log(error);
			}
		})
}


module.exports = renderHTML;