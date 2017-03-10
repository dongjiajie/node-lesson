const res = [
  {
    name: 'a',
    price: 10,
    amount: 100,
  },
  {
    name: 'b',
    price: 20,
    amount: 100,
  },
  {
    name: 'c',
    price: 30,
    amount: 150,
  },
  {
    name: 'd',
    price: 40,
    amount: 190,
  }
]

function filterNumber(resource, min, max) {
  let result= [];
  resource.map((res) => {
    if (res.price > min && res.price < max) {
      result.push(res);
    }
  });
  return result;
}

function filterString(resource, val) {
  let result = [];
  resource.map((res) => {
    if (res.name === val) {
      result.push(res);
    } else {
      
    }
  });
  return result;
}

const a = filterNumber(res, 10, 30);
console.log(a);

const b = filterString(res, 'a');
console.log(b);
