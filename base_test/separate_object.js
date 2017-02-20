var obj = {
     name:'Jone',
     age:'23',
     height:200,
     weight:400,
}

var newObj = Object.keys(obj)
  .slice(Object.keys(obj).indexOf('age'))
  .reduce((a, c) => Object.assign(a, { [c]: obj[c] }), {})

console.log(newObj);

console.log('------------');

const x = {a: 1, b: 2, c: 3, z:26};

const objectWithoutKey = (object, key) => {
  const {[key]: deletedKey, ...otherKeys} = object;
  return otherKeys;
}

console.log(objectWithoutKey(x, 'b')); // {a: 1, c: 3, z:26}
console.log(x); // {a: 1, b: 2, c: 3, z:26};