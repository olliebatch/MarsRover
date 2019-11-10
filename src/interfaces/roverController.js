const Rover = require('../application/createRover');
const runRover = require('../application/RunMovements');
const convertStringToArray = require('./helpers/convertArray');
const validateRequest = require('./helpers/validateRequest');

function roverController(roverInfo, gridSize) {
  const output = [];
  roverInfo.forEach(async function(post) {
    const x = new Rover(post);
    const movement = x.movement();
    const formattedMovement = convertStringToArray(movement);
    const roverPosition = x.roverFormattedObject();
    validateRequest(roverPosition);
    const outputRover = runRover(formattedMovement, roverPosition, gridSize);
    output.push(outputRover);
  });
  return output;
}

module.exports = roverController;
