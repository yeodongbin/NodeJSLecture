
process.on('tick', function(count){
    console.log('%s',count);
});

setTimeout(function() {
    console.log('Try to emit tick-event after 2sec');

    process.emit('tick','2');
},2000);

process.on('exit', function() {
    console.log('exit event on');
})

setTimeout(function(){
    console.log('After 2sec, system would be exited ');
    process.exit();
},2000);
