// CommonJS, every file in node is a module (by default)
//Modules - Encapsulated Code (only share minimum)
// could destructure like const { john, peter } = require('./4-names')
const names = require('./4-names')
const sayHi = require('./5-utils')
const bob = require('./6-alt-flavor')
require('./7-mind-grenade')
// console.log(bob);
// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);