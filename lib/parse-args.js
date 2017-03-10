module.exports = () => {
  // destructuring at it's finest
  let [,, arg1, arg2] = process.argv;
  // create an objects with count and sides
  let args = {"count": arg1, "sides": arg2};
  return args;
};
