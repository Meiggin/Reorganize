/**
 * Created by Administrator on 2017/2/12.
 */
var fs = require("fs");


fs.writeFileSync("./kerwintest/1.txt",`得到文件与目录的信息：stat
创建一个目录：mkdir
创建文件并写入内容：writeFile,appendFile
读取文件的内容：readFile
列出目录的东西：readdir
重命名目录或文件：rename
删除目录与文件：rmdir,unlink
`)

fs.appendFileSync("./kerwintest/1.txt","111111")
fs.appendFileSync("./kerwintest/1.txt","222222")
fs.appendFileSync("./kerwintest/1.txt","333333")
fs.appendFileSync("./kerwintest/1.txt","4444444")
fs.appendFileSync("./kerwintest/1.txt","5555555")

