module.exports = () => {
  // destructuring at it's finest
  let [,, arg1, arg2] = process.argv;
  // create an objects with rolls and sides
  let args = {"rolls": arg1, "sides": arg2};
  return args;
};
