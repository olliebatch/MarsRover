/* eslint-disable func-names */
// const x = [ { xGrid: 1, yGrid: 3, direction: 'N' } ]
// const y = { xGrid: 1, yGrid: 3, direction: 'N' }

function checkRoverClash(x, y) {
  x.forEach(function(post) {
    if (post.xGrid === y.xGrid && post.yGrid === y.yGrid) {
      throw new Error(`Clash with another Rover on coordinates ${post.xGrid},${post.yGrid}`);
    }
  });
}

module.exports = checkRoverClash;
