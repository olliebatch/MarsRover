function validateRequest(roverPosition) {
  if (typeof roverPosition.xGrid !== 'number') {
    throw new Error('Wrong Data type, xGrid should be number');
  } else if (typeof roverPosition.yGrid !== 'number') {
    throw new Error('Wrong Data type, yGrid should be number');
  }
}

module.exports = validateRequest;
