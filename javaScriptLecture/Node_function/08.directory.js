var fs = require('fs');

fs.mkdir('./docs', 0666, function (err) {
    if (err) throw err;
    console.log('Make new folder');

    fs.rmdir('./docs', function (err) {
        if (err) throw err;
        console.log('Remove docs folder');
    });
});