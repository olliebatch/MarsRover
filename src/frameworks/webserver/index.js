const express = require('express');
const bodyParser = require('body-parser');
const requestHandler = require('./routeHandler/webrequest');

const createServer = async port => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
      res.header('Accces-Control-Allow-Methods', 'POST');
      return res.status(200).json({});
    }
    return next();
  });

  app.post('/rovers/:x/:y', requestHandler.webRequestHandler);

  app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });

  app.listen(port, error => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      process.exit(1);
    }

    // eslint-disable-next-line no-console
    console.log(`🚀  Server listening on port: ${port}`);
  });
};

module.exports = createServer;
