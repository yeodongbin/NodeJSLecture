var User = [{ name: 'sana', age: 20 }, { name: 'nayeon', age: 20 }];

User.push({ name: 'tzuyu', age: 20 });

console.log(User.length);
console.log('%s', User[0].name);

var add = function (a, b) {
    return a + b;
}

User.push(add)//array 둣부분 추가

console.log(User.length);
console.log('%s', User[3](10, 10));

for (var i = 0; i < User.length - 1; i++) {
    console.log('#' + i + ': %s', User[i].name);
}

User.pop();//array 뒷부분 삭제
User.forEach(function(item, index) {
    console.log('#' + index + ': %s', item.name);
});

User.unshift({ name: 'Jeongyeon', age: 21 });
User.forEach(function(item, index) {
    console.log('#' + index + ': %s', item.name);
});

User.shift();
User.forEach(function(item, index) {
    console.log('#' + index + ': %s', item.name);
});

//삭제 방법
delete User[0];
console.dir(User);

User.splice(0,1);//첫번째부터 1개
console.dir(User);

//splice를 활용한 추가
User.splice(0,0, {name:'jeongyeon', age:21});
console.dir(User);

//slice() 복사
var User2 = User.slice(1,3);//두번째부터 네번째 전까지
console.dir(User2);

var User3 = User.slice(0);//첫번째부터 모두
console.dir(User3);