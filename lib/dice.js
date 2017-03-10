let dice = function () {};

dice.prototype.log = function() {
  console.log('dice!');
};
dice.prototype.otherlog = () => {
  console.log('other dice!')
};

module.exports = new dice();

// module.exports = () => {
//   roll
// }
