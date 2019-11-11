const checkRoverPosition = require('../checkRoverpos');

describe('Testing Validation of Rover positioning with other Rover', () => {
  it('Test to ensure that the validation input checks are working successfully with a number sent', async () => {
    const allRoverPositions = [{ xGrid: 1, yGrid: 2, direction: 'N' }, { xGrid: 3, yGrid: 2, direction: 'N' }];
    const currentRover = { xGrid: 5, yGrid: 5, direction: 'N' };
    expect(checkRoverPosition(allRoverPositions, currentRover)).toBeUndefined();
  });
  it('Test to ensure that an error is thrown if a Rover is already on the grid Position', async () => {
    const allRoverPositions = [{ xGrid: 1, yGrid: 2, direction: 'N' }, { xGrid: 3, yGrid: 2, direction: 'N' }];
    const currentRover = { xGrid: 3, yGrid: 2, direction: 'N' };
    expect(() => {
      checkRoverPosition(allRoverPositions, currentRover);
    }).toThrow();
  });
  it('Test to ensure that the validation input checks are working successfully even with one matched axis', async () => {
    const allRoverPositions = [{ xGrid: 1, yGrid: 2, direction: 'N' }, { xGrid: 3, yGrid: 2, direction: 'N' }];
    const currentRover = { xGrid: 1, yGrid: 3, direction: 'N' };
    expect(checkRoverPosition(allRoverPositions, currentRover)).toBeUndefined();
  });
});
