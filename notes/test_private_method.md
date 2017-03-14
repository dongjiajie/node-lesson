## 在nodejs中测试私有方法
---
### 背景
* 私有方法不会export出来
* 在javascript中，没有export出来的意味着不能被外部调用
* 在测试中如何调用单个私有方法呢？

### 方案
* 把私有方法拆分得足够简单，直接不测（个人不赞成👎）[传送门](http://stackoverflow.com/questions/105007/should-i-test-private-methods-or-only-public-ones)
* 借助`rewire`，把私有方法拿出来测（推荐👍）[传送门](http://stackoverflow.com/questions/22097603/unit-testing-of-private-functions-with-mocha-and-node-js)

### rewire的使用（[Github](https://github.com/jhnns/rewire)）
    npm install --save-dev rewire

```javascript
  const rewire = require('reqire');
  const MyClass = reqire('./you/path/MyClass');

  const private_method = MyClass.__get__('private_method');

  private_method();
```

### 自己实现的一个Demo

定义了一个Dog类，有个类方法`showName`以及一个私有方法`showCount`
```javascript
// index.js
function showCount(num) {
  const res = num * 10;
  return res;
}

class Dog {
  constructor() {
    this.name = 'small_white';
  }

  showName() {
    const res = this.name;
    return res;
  }
}

module.exports = Dog;
```
在测试中可以看到通过`rewire`引入之后可以通过`__get__`方法把私有方法拿出来使用
```javascript
// test.js
const rewire = require('rewire');
const lab = exports.lab = require('lab').script();
const index = rewire('./index');
const should = require('should');

const describe = lab.describe;
const it = lab.it;

const Dog = new index();

describe('test rewire in #index', () => {

  it('.showName', (done) => {
    res = Dog.showName();
    (res).should.equal('small_white');
    done();
  })

  const showCount = index.__get__('showCount');
  it('.showCount', (done) => {
    const res = showCount(10);
    (res).should.equal(100);
    done();
  })
})
```
