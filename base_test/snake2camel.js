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
      const newKey = origKey.replace(/(_\w)/g, m => m[1].toUpperCase());
      newObject[newKey] = value;
    });
    return newObject;
  }
}

const target = { retailer_product_id: '10005-440201887008',
         number_requested: 4,
         number_received: 0,
         price: 135,
         sales_price: null,
         date_fulfilled: null,
         product_url: null }

const res = Utils.toCamel(target)
console.log(res);

