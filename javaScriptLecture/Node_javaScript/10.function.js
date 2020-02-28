function add(a,b) {
    return a+b;
}

var result = add(10,10)
console.log('%d', result)

var add2 = function (a,b) {
    return a+b;
}

result = add2(10,20)
console.log('%d', result)

var Person = {}

Person['age'] = 20
Person['name'] = 'tzuyu'
Person.add = function(a,b){
    return a+b;
};

console.log('%d',Person.add(10,30))

var oper = function(a,b){
    return a+b+1;
}

Person['add'] = oper;
console.log('%d',Person.add(10,30))

var Person2 = {
    age : 20,
    name : 'tzuyu',
    add :function(a,b) {
        return a+b;
    }
}

console.log('%d',Person2.add(10,40))