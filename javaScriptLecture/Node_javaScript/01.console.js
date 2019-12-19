console.log('number : %d',10);
console.log('string : %s','Twice');
console.log('JSON   : %j',{name:'Tzuyu '});

var result = 0;
console.dir(result)
console.time('duration_sum')

for (var i = 1 ; i<=10000;i++) {
    result += i ;
}

console.timeEnd('duration_sum')
console.log('result count : %d',result)
console.log('filename',__filename)
console.log('dirname',__dirname)