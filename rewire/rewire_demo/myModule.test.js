const rewire = require('rewire');

const myModule = rewire('./myModule');

myModule.__set__("path", "/dev/null");
myModule.__get__("path");

var fsMock = {
    readFile: function (path, encoding, cb) {
        // expect(path).to.equal("/somewhere/on/the/disk");
        console.log(path);
        cb(null, "Success!");
    },
    show: function() {
    	console.log('i am show');
    }
};
myModule.__set__("fs", fsMock);
myModule.__set__("Service", fsMock);


myModule.readSomethingFromFileSystem(function (err, data) {
    console.log(data); // = Success!
});