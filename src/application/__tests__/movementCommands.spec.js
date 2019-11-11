const movementCommand = require('../movementCommand');

describe('Testing movement of Rover command', () => {
  it('Test to ensure that the Rover moves when facing West', async () => {
    const input = { xGrid: 1, yGrid: 1, direction: 'N' };
    expect(movementCommand('W', input)).toStrictEqual({ xGrid: 0, yGrid: 1, direction: 'N' });
  });
  it('Test to ensure that the Rover moves when facing North', async () => {
    const input = { xGrid: 1, yGrid: 1, direction: 'N' };
    expect(movementCommand('N', input)).toStrictEqual({ xGrid: 1, yGrid: 2, direction: 'N' });
  });
  it('Test to ensure that the Rover moves when facing East', async () => {
    const input = { xGrid: 1, yGrid: 1, direction: 'N' };
    expect(movementCommand('E', input)).toStrictEqual({ xGrid: 2, yGrid: 1, direction: 'N' });
  });
  it('Test to ensure that the Rover moves when facing South', async () => {
    const input = { xGrid: 1, yGrid: 1, direction: 'N' };
    expect(movementCommand('S', input)).toStrictEqual({ xGrid: 1, yGrid: 0, direction: 'N' });
  });
});
