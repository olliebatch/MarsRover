const Rover = require('../createRover');

describe('Testing of Class - Creation of Rover', () => {
  const RoverInputRequest = {
    roverNo: 1,
    xGrid: 1,
    yGrid: 2,
    direction: 'N',
    movements: 'LMLMLMLMM',
  };
  it('Test Rover Constructor', async () => {
    const rover1 = new Rover(RoverInputRequest);
    expect(rover1.roverNo).toBe(1);
    expect(rover1.xGrid).toBe(1);
    expect(rover1.yGrid).toBe(2);
    expect(rover1.direction).toBe('N');
    expect(rover1.movements).toBe('LMLMLMLMM');
  });
  it('Test to ensure that the movements function associated to the class returns the movements correctly', async () => {
    const rover = new Rover(RoverInputRequest);
    const roverMovements = rover.movement();
    expect(roverMovements).toStrictEqual('LMLMLMLMM');
  });
  it('Test to ensure that the Rover moves when facing East', async () => {
    const rover = new Rover(RoverInputRequest);
    const roverFormatObject = rover.roverFormattedObject();
    expect(roverFormatObject).toStrictEqual({ xGrid: 1, yGrid: 2, direction: 'N' });
  });
});
