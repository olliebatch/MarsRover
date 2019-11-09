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
  roverInfo.forEach(async function(post) {
    const x = await new Rover(post);
    const movement = await x.movement();
    const formattedMovement = await convertStringToArray(movement);
    const format = await x.roverFormattedObject();
    const outputRover = await runRover(formattedMovement, format, gridSize);
    await output.push(outputRover);
  });
  return output;
}

module.exports = loopArray;
