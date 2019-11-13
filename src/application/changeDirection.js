/* eslint-disable default-case */
// eslint-disable-next-line consistent-return
function changeDirection(directionFacing, directionChange) {
  switch (directionFacing) {
    case 'W':
      // if (directionChange === 'L') {
      //   return 'S';
      // }
      // if (directionChange === 'R') {
      //   return 'N';
      // }

      return directionChange === 'L' ? 'S' : 'N';
    // /* istanbul ignore next */
    // break;

    case 'N':
      // if (directionChange === 'L') {
      //   return 'W';
      // }
      // if (directionChange === 'R') {
      //   return 'E';
      // }
      // /* istanbul ignore next */
      // break;

      return directionChange === 'L' ? 'W' : 'E';

    case 'E':
      // if (directionChange === 'L') {
      //   return 'N';
      // }
      // if (directionChange === 'R') {
      //   return 'S';
      // }
      // /* istanbul ignore next */
      // break;
      return directionChange === 'L' ? 'N' : 'S';

    case 'S':
      // if (directionChange === 'L') {
      //   return 'E';
      // }
      // if (directionChange === 'R') {
      //   return 'W';
      // }
      // /* istanbul ignore next */
      // break;
      return directionChange === 'L' ? 'E' : 'W';
  }
}

module.exports = changeDirection;
