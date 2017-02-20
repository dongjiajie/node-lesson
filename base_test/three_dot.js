var parts = ['two', 'three'];
var numbers = ['one', ...parts, 'four', 'five'];

console.log(numbers);

let someObject = {aProperty: true, anotherProperty: true}
let newObject = Object.assign({}, someObject, {aThirdProperty: true})

// let newObject = {...someObject, aProperty: true}  // fail 
 
console.log(someObject);
console.log(newObject);