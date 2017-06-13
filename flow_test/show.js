class A {
  a: string;
  b: string;

  constructor() {
    this.a = 'a';
    this.b = 'b';
  }
}

type catType = {
  name: string,
  age: number
}

type dogType = {
  type?: string
}

function show(pet: catType & dogType): number{
  const newPet = pet;
  delete newPet['type'];
  return 1;
}

const cat = {
  name: 'cat',
  age: 10
}

const dog = {
  type: 'Alaska'
}

show(Object.assign({}, cat, dog))
