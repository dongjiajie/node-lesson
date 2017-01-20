global.Promise = require('bluebird');
const co = Promise.coroutine;

const a = co(function* (abc) {
  console.time(abc);
  for (var i = 1; i < 1000; i++)
    yield Promise.delay(0);
  console.timeEnd(abc);
});

a('test1');

const b = async function(abc) {
  console.time(abc);
  for (var i = 1; i < 1000; i++)
    await Promise.delay(0);
  console.timeEnd(abc);
}

b('test2');