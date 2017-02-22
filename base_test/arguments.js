function f(n) { g(n - 1); }

function g(n) {
  console.log('before: ' + g.arguments[0]);
  if (n > 0) { f(n); }
  console.log('after: ' + g.arguments[0]);
}

f(2);

console.log('returned: ' + g.arguments);


function t(...args) {
	console.log(args);
	Object.values(args).forEach((arg) => {
		console.log(arg);
	});
}

t(1,2,3);


function mergeRegistry(...args) {
    // merge registry by ModifiedDate
    const dates = [];
    args.forEach((arg) => {
      dates.push(Date.parse(arg.modifiedDate));
    })
    const i = dates.indexOf(Math.max(...dates));
    return args[i];
 }

 console.log(mergeRegistry({modifiedDate: '2016-01-01'}, {modifiedDate: '2017-01-01'}, {modifiedDate: '2017-01-02'}));

  function pickObj(obj, keys) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') throw new Error('it is not an Object.');
    const pick = {};
    const omit = obj;
    const unsolveKeys = [];
    keys.forEach((key) => {
      if (obj[key]) {
        pick[key] = obj[key];
        delete omit[key];
      } else {
        unsolveKeys.push(key);
      }
    });
    return { pick, omit, unsolveKeys };
  }

  console.log(pickObj({a:1,b:2,c:3}, ['a', 'b', 'd']));