module.exports = (r, s) => {
  let sides = parseInt(s);
  let rolls = parseInt(r);

  if (sides === 0) {
    rolls = 0;
    console.log('add one')
  }

  min = Math.ceil(rolls);
  max = Math.floor(sides) * min;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
