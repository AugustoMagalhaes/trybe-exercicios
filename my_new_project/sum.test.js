const sum = require('./sum.js');

test('sum two values', () => {
    expect(sum(2,3)).toBe(5);
});