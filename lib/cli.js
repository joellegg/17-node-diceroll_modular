// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};

const randomInt = require('./math.js');
let num = randomInt(4, 2)
console.log(num.randomInt())
