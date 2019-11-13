/* eslint-disable func-names */
const Rover = require('../application/createRover');
const runRover = require('../application/RunMovements');
const convertStringToArray = require('./helpers/convertArray');
const validation = require('./helpers/validation');

async function roverController(roverInfo, gridSize) {
  const output = [];
  roverInfo.forEach(async function(post) {
    const x = new Rover(post);
    const movement = x.movement();
    const formattedMovement = convertStringToArray(movement);
    const roverPosition = x.roverFormattedObject();
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
