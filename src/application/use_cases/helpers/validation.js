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
  if (gridSize.x <= 0 || gridSize.y <= 0) {
    throw new Error('Grid Size Value cant be less than 0');
  } else if (typeof gridSize.x !== 'number' || typeof gridSize.y !== 'number') {
    throw new Error('GridSize is not a number');
  } else {
    return null;
  }
}

function validateMovement(movement) {
  if (movement === 'L') {
    return null;
  }
  if (movement === 'R') {
    return null;
  }
  if (movement === 'M') {
    return null;
  }
  throw new Error('Movement Command is not recognised');
}

module.exports = { validateRequest, validateGrid, validateMovement };
