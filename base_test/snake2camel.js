class Utils {
  static toCamel(o) {
  if (o instanceof Array) {
    const newArray = [];
    for (let i = 0, value, len = o.length; i < len; i += 1) {
      value = o[i];
      if (typeof value === 'object') {
        value = Utils.toCamel(value);
      }
      newArray.push(value);
    }
    return newArray;
  }
  const newObject = {};
  Object.keys(o).forEach((origKey) => {
    let value = o[origKey];
    if (value !== null && typeof value === 'object') {
      value = Utils.toCamel(value);
    }
    newObject[origKey.replace(/(\_\w)/g, function(m){return m[1].toUpperCase();})] = value;
  });
  return newObject;
}
}

const res = Utils.toCamel({snake_case: 'aa', snake_case2: [{case_for_array: 'a'}], case_for_obj: {hello_world: 'b'}})  
console.log(res);