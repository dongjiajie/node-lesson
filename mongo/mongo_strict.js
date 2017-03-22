const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({}, {
    strict: true
});

const Person = mongoose.model('Person', PersonSchema);

mongoose.connect('mongodb://localhost:/test', function(err) {
  if (err) console.log(err.message);
  console.log('Connected');
  
  Person.collection.insert({
    name: 'Dog',
    content: 'Hello World',
    age: 10,
  }, (err, result) => {
    if (err) console.log(err.message);
    console.log(result);
  });

  Person.findOne({name: 'Dog'}, (err, res) => {
  	if (err) console.log(err.message);
  	console.log('find by name:');
  	console.log(res);
  });

  Person.findById('58d26c722068211d02f1ee72', (err, res) => {
  	console.log('find by Id:');
  	console.log(res);
  })
});