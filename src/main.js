/* eslint-disable func-names */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable default-case */

const convertStringToArray = require('./interfaces/helpers/convertArray');
const loopArray = require('./application/RunMovements');

//const gridSize = { xGrid: 5, yGrid: 5 };

const movementInput = 'LMLMLMLMM';

const inputMovementList = convertStringToArray(movementInput);

console.log(loopArray(inputMovementList));

// eslint-disable-next-line consistent-return