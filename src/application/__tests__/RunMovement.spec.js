const movementLoops = require('../RunMovements');

describe('Testing of the movement loops', () => {
  it('Test output of movement loop', async () => {
    const movements = ['L','M','L','M','L','M','L','M','M'];
    const roverPosition = {
      xGrid: 1,
      yGrid: 2,
      direction: 'N',
    };
    const gridSize = { x: 5, y: 5 };
    const output = [];
    const test = movementLoops(movements, roverPosition, gridSize, output);
    expect(test).toStrictEqual({
      xGrid: 1,
      yGrid: 3,
      direction: 'N',
    });
  });
});
