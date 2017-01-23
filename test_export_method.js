const faker = require('faker');

const baseES = {
  _index: 'couple',
  _type: 'couple',
  _id: 123,
  _version: 1,
  found: true,
  _source: {},
};

const getBaseES = (source) => {
  return Object.assign({}, baseES, { _source: source });
}

module.exports = getBaseES;
