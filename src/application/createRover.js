class Rover {
  constructor(rover) {
    this.roverNo = rover.roverNo;
    this.xGrid = rover.xGrid;
    this.yGrid = rover.yGrid;
    this.direction = rover.direction;
    this.movements = rover.movements;
  }

  movement() {
    return this.movements;
  }

  roverFormattedObject() {
    return { roverNo: this.roverNo, xGrid: this.xGrid, yGrid: this.yGrid, direction: this.direction };
  }
}

module.exports = Rover;
