const moveandDirectController = require('./moveandDirectionController');

const roverInput = { xGrid: 1, yGrid: 2, direction: 'N' };

function loopArray(movements) {
  let testInput = roverInput;
  movements.forEach(function(post) {
    testInput = moveandDirectController(post, testInput);
  });
  return testInput;
}

module.exports = loopArray;
