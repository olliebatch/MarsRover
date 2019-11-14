/* eslint-disable default-case */
// eslint-disable-next-line consistent-return
function changeDirection(directionFacing, directionChange) {
  switch (directionFacing) {
    case 'W':
      return directionChange === 'L' ? 'S' : 'N';
    case 'N':
      return directionChange === 'L' ? 'W' : 'E';

    case 'E':
      return directionChange === 'L' ? 'N' : 'S';

    case 'S':
      return directionChange === 'L' ? 'E' : 'W';
  }
}

module.exports = changeDirection;
