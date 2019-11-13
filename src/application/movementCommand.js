function movementCommand(directionFacing, input) {
  const roverOutput = input;
  if (directionFacing === 'W') {
    roverOutput.xGrid -= 1;
  } else if (directionFacing === 'E') {
    roverOutput.xGrid += 1;
  } else if (directionFacing === 'S') {
    roverOutput.yGrid -= 1;
  } else if (directionFacing === 'N') {
    roverOutput.yGrid += 1;
  } else {
    throw new Error('Unrecognised Move Command');
  }

  return roverOutput;
}

module.exports = movementCommand;
