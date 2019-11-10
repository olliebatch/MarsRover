const controller = require('../../../interfaces/roverController');

// NEEDS TO VALIDATE INTEGERS

exports.webRequestHandler = async (req, res) => {
  const gridSize = { x: req.params.x, y: req.params.y };
  res.json(await controller(req.body, gridSize));
};
