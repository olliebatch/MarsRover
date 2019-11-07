function validateGridPosition(roverPosition, gridSize) {
  if (roverPosition.xGrid < 0 || roverPosition.xGrid > gridSize.x) {
    throw new Error('Rover would fall off the specified x axis');
  } else if (roverPosition.yGrid < 0 || roverPosition.yGrid > gridSize.y){
    throw new Error('Rover would fall off the specified y axis');
  }
}

module.exports = validateGridPosition;
