var sinon = require('sinon');
var object = {
    get myProperty() {
        return '4fb82903-6222-45e4-bfeb-a536bfc9734a';
    } 
};

function fakeGet() {
    return 'faked myProperty';
}

var descriptor = sinon.stub(object, 'myProperty', { 
    get: fakeGet
});


console.log('object.myProperty', object.myProperty);
console.log('callCount', descriptor.get.callCount);