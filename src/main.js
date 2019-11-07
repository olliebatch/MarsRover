const dotenv = require('dotenv');
const createServer = require('./frameworks/webserver/index');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const start = async () => {
  await createServer(process.env.INFRASTRUCTURE_WEBSERVER_PORT);
};

start();

// const gridSize = { x: 5, y: 5 };
// const movementInput = 'LMLMLMLMM';

// const inputMovementList = convertStringToArray(movementInput);

// console.log(loopArray(inputMovementList, gridSize));

// eslint-disable-next-line consistent-return
