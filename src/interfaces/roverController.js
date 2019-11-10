const Rover = require('../application/createRover');
const runRover = require('../application/RunMovements');
const convertStringToArray = require('./helpers/convertArray');

function roverController(roverInfo, gridSize) {
  const output = [];
  roverInfo.forEach(function(post) {
    const x = new Rover(post);
    const movement = x.movement();
    const formattedMovement = convertStringToArray(movement);
    const roverPosition = x.roverFormattedObject();
    const outputRover = runRover(formattedMovement, roverPosition, gridSize);
    output.push(outputRover);
  });
  return output;
}

module.exports = roverController;
