var fs = require('fs');

var readStream = fs.createReadStream("filestream/data.json"); //可读流
var writeStream = fs.createWriteStream("filestream/test.json");//可写流


readStream.pipe(writeStream);