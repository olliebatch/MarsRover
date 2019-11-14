const moveandDirectController = require('./moveandDirectionController');
const validateGridPosition = require('./helpers/validateGridPosition');
const checkRoverPosition = require('./helpers/checkRoverpos');
const validation = require('./helpers/validation');

function runRover(movements, roverPosition, gridSize, output) {
  let testInput = roverPosition;
  // eslint-disable-next-line func-names
  movements.forEach(function(post) {
    validation.validateMovement(post);
    testInput = moveandDirectController(post, testInput);
    checkRoverPosition(output, testInput);
    validateGridPosition(testInput, gridSize);
  });
  return testInput;
}

module.exports = runRover;
