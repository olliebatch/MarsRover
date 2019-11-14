const dotenv = require('dotenv');
const createServer = require('./frameworks/webserver/index');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const start = async () => {
  await createServer(process.env.INFRASTRUCTURE_WEBSERVER_PORT);
};
//
start();
