/* eslint-disable func-names */
function checkRoverClash(allRoverPositions, currentRover) {
  allRoverPositions.forEach(function(post) {
    if (post.xGrid === currentRover.xGrid && post.yGrid === currentRover.yGrid) {
      throw new Error(`Clash with another Rover on coordinates ${post.xGrid},${post.yGrid}`);
    }
  });
}

module.exports = checkRoverClash;
