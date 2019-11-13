const roverController = require('../roverController');

describe('Testing of the movement loops', () => {
  it('Test output of movement loop', async () => {
    const roverInfo = [
      {
        roverNo: '1',
        xGrid: 1,
        yGrid: 2,
        direction: 'N',
        movements: 'LMLMLMLMM',
      },
      {
        roverNo: '2',
        xGrid: 3,
        yGrid: 3,
        direction: 'E',
        movements: 'MMRMMRMRRM',
      },
    ];
    const gridSize = { x: 5, y: 5 };

    const expectedRoverOutput = [
      {
        roverNo: '1',
        xGrid: 1,
        yGrid: 3,
        direction: 'N',
      },
      {
        roverNo: '2',
        xGrid: 5,
        yGrid: 1,
        direction: 'E',
      },
    ];
    const x = await roverController(roverInfo, gridSize);
    expect(x).toStrictEqual(expectedRoverOutput);
  });
});
