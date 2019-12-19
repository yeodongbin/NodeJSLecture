console.log('process parameter count : ' + process.argv.length)
console.dir(process.argv)

if (process.argv.length > 2) {
    console.log('parameter 2 value : %s', process.argv[2])
}

process.argv.forEach(function(item, index) {
    console.log(index + ' : ', item)
});

// node 02.forEach.js __port 7001 실행해 볼것
console.dir(process.env)
// console.log('OS env :' + process.env[OS]) // error