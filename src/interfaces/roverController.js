/* eslint-disable func-names */
const Rover = require('./createRover');
const runRover = require('../application/use_cases/RunMovements');
const convertStringToArray = require('./helpers/convertArray');
const validation = require('../application/use_cases/helpers/validation');

async function roverController(roverInfo, gridSize) {
  const output = [];
  roverInfo.forEach(async function(post) {
    const rover = new Rover(post);
    const movement = rover.movement();
    const formattedMovement = convertStringToArray(movement);
    const roverPosition = rover.roverFormattedObject();
    let outputRover = {};
    try {
      validation.validateGrid(gridSize);
      validation.validateRequest(roverPosition);
      outputRover = runRover(formattedMovement, roverPosition, gridSize, output);
    } catch (err) {
      outputRover = { roverNo: roverPosition.roverNo, error: err.message };
    }
    output.push(outputRover);
  });
  return output;
}

module.exports = roverController;
