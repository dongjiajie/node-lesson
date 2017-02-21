const pickVal = {a: 1,b :2, c:3, d: 4};

function pick(obj, keys) {
	if (!Object.keys(obj).length) {
		console.log('Object is empty.');
		return false;
	}
	let result = {};
  for (let i = 0, length = keys.length; i < length; i++) {
    const key = keys[i];
    const value = obj[key];
    if (value) result[key] = value;
  }
  return result;
}

console.log(pick(pickVal, ['a', 'b']));

const omitVal = {a: 1,b :2, c:3, d: 4};

function omit(obj, keys) {
  for (let i = 0, length = keys.length; i < length; i++) {
    const key = keys[i];
    const value = obj[key];
    if (value) delete obj[key];
  }
  return obj;
}

console.log(omit(omitVal, ['a', 'b']));

const pickOmitVal = {a: 1,b :2, c:3, d: 4};

function pickOmit(obj, keys) {
	if (!Object.keys(obj).length) return false;
	let pick = {}, omit = obj, unsolveKeys = [];
  for (let i = 0, length = keys.length; i < length; i++) {
    const key = keys[i], value = obj[key];
    if (value) {
    	pick[key] = value;
    	delete omit[key];
    } else {
    	unsolveKeys.push(key);
    }
  }
  return { pick, omit, unsolveKeys };
}

console.log(pickOmit(pickOmitVal, ['a', 'b', 'm']));