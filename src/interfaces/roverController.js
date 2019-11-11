const Rover = require('../application/createRover');
const runRover = require('../application/RunMovements');
const convertStringToArray = require('./helpers/convertArray');
const validation = require('./helpers/validation');

function roverController(roverInfo, gridSize) {
  const output = [];
  validation.validateGrid(gridSize);
  roverInfo.forEach(async function(post) {
    const x = new Rover(post);
    const movement = x.movement();
    const formattedMovement = convertStringToArray(movement);
    const roverPosition = x.roverFormattedObject();
    validation.validateRequest(roverPosition);
    const outputRover = runRover(formattedMovement, roverPosition, gridSize, output);
    output.push(outputRover);
  });
  return output;
}

module.exports = roverController;
