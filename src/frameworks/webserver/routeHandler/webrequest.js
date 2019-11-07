// const gridSize = { x: 5, y: 5 };
const movementInput = 'LMLMLMLMM';
const convertStringToArray = require('../../../interfaces/helpers/convertArray');
const loopArray = require('../../../application/RunMovements');

const inputMovementList = convertStringToArray(movementInput);

// console.log(loopArray(inputMovementList, gridSize));

exports.webRequestHandler = async (req, res) => {
  const gridSize = { x: req.params.x, y: req.params.y };
  res.json(await loopArray(inputMovementList, gridSize));
};
