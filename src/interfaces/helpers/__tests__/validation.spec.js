const validation = require('../validation');

describe('Testing Validation validation request function', () => {
  it('Test to ensure that the validation input checks are working successfully with a number sent', async () => {
    const roverPosition = { xGrid: 1, yGrid: 2, direction: 'N' };
    expect(validation.validateRequest(roverPosition)).toBeNull();
  });
  it('Test to ensure that an error is thrown for x axis not being a number', async () => {
    const roverPosition = { xGrid: '1', yGrid: 2, direction: 'N' };
    expect(() => {
      validation.validateRequest(roverPosition);
    }).toThrow();
  });
  it('Test to ensure that an error is thrown for y axis not being a number', async () => {
    const roverPosition = { xGrid: 1, yGrid: '2', direction: 'N' };
    expect(() => {
      validation.validateRequest(roverPosition);
    }).toThrow();
  });
  it('Test to ensure that an error is thrown for direction not being a string', async () => {
    const roverPosition = { xGrid: 1, yGrid: 2, direction: 1 };
    expect(() => {
      validation.validateRequest(roverPosition);
    }).toThrow();
  });
});

describe('Testing Validation validate Grid function', () => {
  it('Test to ensure that the validation input checks are working successfully with correct grid', async () => {
    const gridSize = { x: 5, y: 5 };
    expect(validation.validateGrid(gridSize)).toBeNull();
  });
  it('Test to ensure that an error is thrown for x axis being less than 0', async () => {
    const gridSize = { x: -5, y: 5 };
    expect(() => {
      validation.validateGrid(gridSize);
    }).toThrow();
  });
  it('Test to ensure that an error is thrown for y axis being less than 0', async () => {
    const gridSize = { x: 5, y: -5 };
    expect(() => {
      validation.validateGrid(gridSize);
    }).toThrow();
  });
  it('Test to ensure that errors if it isnt a number', async () => {
    const gridSize = { x: "5", y: "5" };
    expect(() => {
      validation.validateGrid(gridSize);
    }).toThrow();
  });
});
