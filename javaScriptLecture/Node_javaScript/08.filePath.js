var path = require('path')

var directories = ["user","yeodongbin","docs"]
var docsDirectory = directories.join(path.seq)
console.log('%s', docsDirectory)

var curPath = path.join('./User/yeodongbin', 'notepad.exe')
console.log('%s',curPath)

var filename = "C:\\Users\\mike\\notepad.exe"
var dirname = path.dirname(filename);
var basename = path.basename(filename)
var extname = path.extname(filename)

console.log(dirname +","+basename + "," + extname)