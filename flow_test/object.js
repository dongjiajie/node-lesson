// @flow
console.log('================');
let coolRating: {[id:string]: number} = {};
coolRating["sam"] = 10; // Yes, it's a 0-10 scale.

console.log(coolRating);

console.log('================');
class Profile {}
type validation = { name: string; age: number; profile: Object };
const obj: validation = { name: 'Black_J', age: 18, profile: new Profile() }
console.log(obj);

console.log('================');
