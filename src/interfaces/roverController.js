const Rover = require('../application/createRover');
const runRover = require('../application/RunMovements');
const convertStringToArray = require('./helpers/convertArray');

// const roverInfo = [
//   {
//     roverNo: '1',
//     xGrid: '1',
//     yGrid: '2',
//     direction: 'N',
//     movements: 'LMLMLMLMM',
//   },
//   {
//     roverNo: '2',
//     xGrid: '3',
//     yGrid: '3',
//     direction: 'E',
//     movements: 'MMRMMRMRRM',
//   },
//   {
//     roverNo: '2',
//     xGrid: '3',
//     yGrid: '3',
//     direction: 'E',
//     movements: 'MMRMMRMRRM',
//   },
// ];

function loopArray(roverInfo, gridSize) {
  const output = [];
  roverInfo.forEach(function(post) {
    const x = new Rover(post);
    const movement = x.movement();
    const formattedMovement = convertStringToArray(movement);
    const format = x.roverFormattedObject();
    const outputRover = runRover(formattedMovement, format, gridSize);
    output.push(outputRover);
  });
  return output;
}

module.exports = loopArray;
