const hello = require('./hello'); //commonjs syntax
hello();

const random = require('./random')
console.log(process.argv)
const max = Number(process.argv[2])
console.log(random(max))