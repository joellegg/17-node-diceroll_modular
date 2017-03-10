// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

const args = require('./parse-args.js');
console.log('the args', args());

const randomInt = require('./math.js');
let theRando = randomInt();
console.log('theRando', theRando);

const { log, otherlog } = require('./dice.js');
log();
otherlog();
