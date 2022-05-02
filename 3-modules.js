// CommonJS, every file in node is a module (by default)
//Modules - Encapsulated Code (only share minimum)

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
}

sayHi('susan');
sayHi(john);
sayHi(peter);