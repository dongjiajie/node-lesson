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
