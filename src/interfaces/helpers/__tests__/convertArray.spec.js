const convertStringToArray = require('../convertArray');

describe('Check that the String to an Array helper function is successfully splitting data', () => {
  const string = 'Hello';
  const stringArray = convertStringToArray(string);
  it('Test to ensure that string length is correct', async () => {
    expect(stringArray.length).toBe(5);
  });
  it('Test to ensure that array contains the correct string', async () => {
    const expectedArray = ['H', 'e', 'l', 'l', 'o'];
    expect(stringArray).toEqual(expectedArray);
  });
});
