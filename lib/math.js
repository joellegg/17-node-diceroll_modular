module.exports = (max, min) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return {
    randomInt: () => Math.floor(Math.random() * (max - min + 1)) + min
  };
}
