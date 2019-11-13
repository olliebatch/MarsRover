const moveandDirectController = require('./moveandDirectionController');
const validateGridPosition = require('./validateGridPosition');
const checkRoverPosition = require('../interfaces/helpers/checkRoverpos');

function loopArray(movements, roverPosition, gridSize, output) {
  let testInput = roverPosition;
  // eslint-disable-next-line func-names
  movements.forEach(function(post) {
    testInput = moveandDirectController(post, testInput);
    checkRoverPosition(output, testInput);
    validateGridPosition(testInput, gridSize);
  });
  return testInput;
}

module.exports = loopArray;
