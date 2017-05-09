const rewire = require('rewire');

const myModule = rewire('./myModule');
const Service = rewire('./service');

myModule.__set__("path", "/dev/null");
myModule.__get__("path");

const name = Service.__get__('name');

var fsMock = {
    readFile: function (path, encoding, cb) {
        // expect(path).to.equal("/somewhere/on/the/disk");
        console.log(path);
        cb(null, "Success!");
    },
    name: function() {
    	console.log('I am a mock name');
    },
    show: function() {
    	console.log('I am a mock show');
    }
};

const serviceMock = {
	name: function () {
		console.log('i am a mock name');
	}
}

myModule.__set__("fs", fsMock);
myModule.__set__("Service", fsMock);
// Service.__set__('Service', serviceMock)


myModule.readSomethingFromFileSystem(function (err, data) {
    console.log(data); // = Success!
});