const moveandDirectController = require('./moveandDirectionController');
const validateGridPosition = require('./validateGridPosition');

const roverInput = { xGrid: 1, yGrid: 2, direction: 'N' };

function loopArray(movements, gridSize) {
  let testInput = roverInput;
  // eslint-disable-next-line func-names
  movements.forEach(function(post) {
    testInput = moveandDirectController(post, testInput);
    validateGridPosition(testInput, gridSize);
  });
  return testInput;
}

module.exports = loopArray;
