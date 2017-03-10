const args = require('./parse-args.js');
const { toDiceNotation, roll } = require('./dice.js');

roll(toDiceNotation(args()));
