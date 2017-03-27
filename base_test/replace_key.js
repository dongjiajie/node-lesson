const _ = require('lodash')
const map = {
	a: 'aa',
	b: 'bb'
}
const obj = {a:1,b:2}

const newObj = _.mapKeys(obj, (value, key) => {
	return map[key]
})

console.log(newObj);