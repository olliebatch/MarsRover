const moveandDirectController = require('./moveandDirectionController');
const validateGridPosition = require('./validateGridPosition');

function loopArray(movements, roverPosition, gridSize) {
  let testInput = roverPosition;
  // eslint-disable-next-line func-names
  movements.forEach(function(post) {
    testInput = moveandDirectController(post, testInput);
    validateGridPosition(testInput, gridSize);
  });
  return testInput;
}

module.exports = loopArray;
