const validateRequest = require('../validateRequest');

describe('Testing Validation Input', () => {
  it('Test to ensure that the validation input checks are working successfully with a number sent', async () => {
    const roverPosition = { xGrid: 1, yGrid: 2, direction: 'N' };
    expect(validateRequest(roverPosition)).toBeNull();
  });
  it('Test to ensure that an error is thrown for x axis not being a number', async () => {
    const roverPosition = { xGrid: '1', yGrid: 2, direction: 'N' };
    expect(() => {
      validateRequest(roverPosition);
    }).toThrow();
  });
  it('Test to ensure that an error is thrown for y axis not being a number', async () => {
    const roverPosition = { xGrid: 1, yGrid: '2', direction: 'N' };
    expect(() => {
      validateRequest(roverPosition);
    }).toThrow();
  });
  it('Test to ensure that an error is thrown for direction not being a string', async () => {
    const roverPosition = { xGrid: 1, yGrid: 2, direction: 1 };
    expect(() => {
      validateRequest(roverPosition);
    }).toThrow();
  });
});
