function showCount(num) {
  const res = num * 10;
  console.log(res);
  return res;
}

class Dog {
  constructor() {
    this.name = 'small_white';
  }

  showName() {
    const res = this.name;
    console.log(res);
    return res;
  }
}

module.exports = Dog;
