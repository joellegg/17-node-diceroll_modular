const math = require('./math.js')

const toDiceNotation = function(obj) {
  // console.log(`roll the ${obj.sides} sided dice ${obj.rolls} times`);
  // convert obj with rolls and sides to string ie 1d6 or 2d40
  let diceString;

  if (obj.sides === undefined && obj.rolls === undefined) {
    diceString = 1 + 'd' + 6;
  } else if (obj.sides === undefined) {
    diceString = 1 + 'd' + obj.rolls;
  } else {
    diceString = obj.rolls + 'd' + obj.sides;
  }

  return diceString;
};

const roll = (diceString) => {
  // produce random number as result of dice roll
  let params = diceString.split('d');
  console.log(`With ${params[0]} rolls of a ${params[1]} sided die you...`)

  let randomNumber = math(params[0], params[1]);
  console.log('You rolled a ', randomNumber)
};

module.exports = { toDiceNotation, roll };
