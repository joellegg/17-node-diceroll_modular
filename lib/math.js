console.log('math.js file fired');
module.exports = (err, max, min) => {
  if (err) {
    return console.log(err);
  };
  if (max === undefined) {
    max = 6
  };
  if (min === undefined) {
    min = 0
  };
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('randomInt', randomInt)
  return randomInt;
}
