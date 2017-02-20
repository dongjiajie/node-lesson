// @flow
const wm: Object = (new WeakMap(): WeakMap<Object, Object>);

const dog = {
	hot: 'hot dog'
};

const val = { amount: 10 };

wm.set(dog, val);
const res = wm.get(dog);

console.log(dog.hot, res.amount);