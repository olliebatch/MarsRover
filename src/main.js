/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable default-case */

const gridSize = { x: 5, y: 5 };

const convertStringToArray = require('./interfaces/helpers/convertArray');
const loopArray = require('./application/RunMovements');

const movementInput = 'LMLMLMLMM';

const inputMovementList = convertStringToArray(movementInput);

console.log(loopArray(inputMovementList, gridSize));

// eslint-disable-next-line consistent-return
