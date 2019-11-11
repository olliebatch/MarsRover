function validateRequest(roverPosition) {
  if (typeof roverPosition.xGrid !== 'number') {
    throw new Error('Wrong Data type, xGrid should be number');
  } else if (typeof roverPosition.yGrid !== 'number') {
    throw new Error('Wrong Data type, yGrid should be number');
  } else if (typeof roverPosition.direction !== 'string') {
    throw new Error('Wrong Data type, direction should be a string');
  } else {
    return null;
  }
}

function validateGrid(gridSize) {
  if (gridSize.x < 0 || gridSize.y < 0) {
    throw new Error('Value cant be less than 0');
  } else {
    return null;
  }
}

module.exports = { validateRequest, validateGrid };
