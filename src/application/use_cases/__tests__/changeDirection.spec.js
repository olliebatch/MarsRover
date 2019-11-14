const changeDirection = require('../changeDirection');

describe('Test the Change in Direction function', () => {
  it('Test to ensure correct outputs for North facing', async () => {
    expect(changeDirection('N', 'L')).toBe('W');
    expect(changeDirection('N', 'R')).toBe('E');
  });
  it('Test to ensure correct outputs for South facing', async () => {
    expect(changeDirection('S', 'L')).toBe('E');
    expect(changeDirection('S', 'R')).toBe('W');
  });
  it('Test to ensure correct outputs for West facing', async () => {
    expect(changeDirection('W', 'L')).toBe('S');
    expect(changeDirection('W', 'R')).toBe('N');
  });
  it('Test to ensure correct outputs for East facing', async () => {
    expect(changeDirection('E', 'L')).toBe('N');
    expect(changeDirection('E', 'R')).toBe('S');
  });
});
