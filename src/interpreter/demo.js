const exec = require('./spec')

var result = exec('asd{{test(`value`,1564,4156,ident)}}');

console.log(result);
