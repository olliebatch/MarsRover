const movementCommand = require('./movementCommand');
const changeDirection = require('./changeDirection');

function moveandDirectController(command, input) {
  if (command === 'M') {
    return movementCommand(input.direction, input);
  }
  return {
    roverNo: input.roverNo,
    xGrid: input.xGrid,
    yGrid: input.yGrid,
    direction: changeDirection(input.direction, command),
  };
}

module.exports = moveandDirectController;
