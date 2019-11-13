const controller = require('../../../interfaces/roverController');

exports.webRequestHandler = async (req, res) => {
  const gridSize = { x: parseInt(req.params.x, 10), y: parseInt(req.params.y, 10) };
  res.json(await controller(req.body, gridSize));
};
