/* eslint-disable default-case */
// eslint-disable-next-line consistent-return
function changeDirection(directionFacing, directionChange) {
  switch (directionFacing) {
    case 'W':
      if (directionChange === 'L') {
        return 'S';
      }
      if (directionChange === 'R') {
        return 'N';
      }
      break;

    case 'N':
      if (directionChange === 'L') {
        return 'W';
      }
      if (directionChange === 'R') {
        return 'E';
      }
      break;

    case 'E':
      if (directionChange === 'L') {
        return 'N';
      }
      if (directionChange === 'R') {
        return 'S';
      }
      break;

    case 'S':
      if (directionChange === 'L') {
        return 'E';
      }
      if (directionChange === 'R') {
        return 'W';
      }
      break;
  }
}

module.exports = changeDirection;
