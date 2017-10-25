var fs = require("fs");

//同步创建文件并写入内容
fs.writeFileSync("logs/log2.js","11111\n你好")
// 会覆盖
fs.writeFileSync("logs/log2.js","22222\n");

//追加
fs.appendFileSync("logs/log2.js","333333");

