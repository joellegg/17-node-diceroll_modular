module.exports = (max, min) => {
  if (max === undefined) {
    max = 6;
  }
  if (min === undefined) {
    min = 1;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
