const webReq = require('../webrequest');

jest.mock('../../../../interfaces/roverController.js');

const controller = require('../../../../interfaces/roverController.js');

describe('Web Request handler', () => {
  const req = { params: { x: 5, y: 5 } };
  const res = { json: jest.fn() };
  it('Ensure that the web Request calls the controller', async () => {
    await webReq.webRequestHandler(req, res);
    expect(controller).toBeCalled();
  });
});
