let dice = function () {};

dice.prototype.toDiceNotation = function(obj) {
  console.log(`roll the ${obj.sides} sided dice ${obj.count} times`)
  // convert obj with count and sides to string ie 1d6 or 2d40
  let diceString = obj.count + 'd' + obj.sides;
  // console.log(diceString, typeof(diceString))
  return diceString;
};
dice.prototype.roll = (diceString) => {
  // produce random number as result of dice roll
};

module.exports = new dice();
