const moveAndDirect = require('../moveandDirectionController');

describe('Testing of Class - Creation of Rover', () => {
  it('Test outputs if a Move command is sent', async () => {
    const RoverInputRequest = {
      xGrid: 1,
      yGrid: 2,
      direction: 'N',
    };
    const x = moveAndDirect('M', RoverInputRequest);
    expect(x).toStrictEqual({
      xGrid: 1,
      yGrid: 3,
      direction: 'N',
    });
  });
  it('Test to ensure that the direction can change', async () => {
    const RoverInputRequest = {
      xGrid: 1,
      yGrid: 2,
      direction: 'N',
    };
    const x = moveAndDirect('L', RoverInputRequest);
    expect(x).toStrictEqual({
      xGrid: 1,
      yGrid: 2,
      direction: 'W',
    });
  });
});
