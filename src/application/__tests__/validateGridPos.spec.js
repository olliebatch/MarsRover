const validation = require('../validateGridPosition');

describe('Testing Validation of Grid Position', () => {
  const gridSize = { x: 5, y: 5 };
  it('Test to ensure that the validation input checks are working successfully with a correct gridPosition', async () => {
    const roverPosition = { xGrid: 1, yGrid: 2, direction: 'N' };
    expect(validation(roverPosition, gridSize)).toBeUndefined();
  });
  it('Test to ensure that an error is thrown for x axis being incorrect', async () => {
    const roverPosition = { xGrid: -1, yGrid: 2, direction: 'N' };
    expect(() => {
      validation(roverPosition, gridSize);
    }).toThrow();
  });
  it('Test to ensure that an error is thrown for y axis being incorrect', async () => {
    const roverPosition = { xGrid: 1, yGrid: -2, direction: 'N' };
    expect(() => {
      validation(roverPosition, gridSize);
    }).toThrow();
  });
});
