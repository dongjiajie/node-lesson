function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

global.Promise = require('bluebird');
const co = Promise.coroutine;

// const async = require('asyncawait/async');
// const await = require('asyncawait/await');


const a = co(function* (abc) {
  console.time(abc);
  for (var i = 1; i < 1000; i++) yield Promise.delay(0);
  console.timeEnd(abc);
});

a('test1');

const b = (() => {
  var _ref = _asyncToGenerator(function* (abc) {
    console.time(abc);
    for (var i = 1; i < 1000; i++) yield Promise.delay(0);
    console.timeEnd(abc);
  });

  return function b(_x) {
    return _ref.apply(this, arguments);
  };
})();

b('test2');
