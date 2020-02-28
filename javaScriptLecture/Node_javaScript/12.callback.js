function add(a, b, callback) {
    var result = a + b;
    callback(result);
    
    //#2
    var history = function () {
        return a + '+' + b + '=' + result;
    };

    return history;
}

add(10, 10, function (result) {
    console.log('callback 함수 호출');
    console.log('%d', result);
});

//#2
var add_history = add(10, 20, function (result) {
    console.log('callback 함수 호출');
    console.log('%d', result);
});
console.log(add_history());

