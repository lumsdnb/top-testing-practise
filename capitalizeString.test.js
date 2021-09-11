const { expect } = require('@jest/globals');
const capitalizeString = require('./capitalizeString');

test('Capitalizes the first character of a string', () => {
  expect(capitalizeString('bob')).toBe('Bob');
});

test('Ignore when number at beginning', () => {
  expect(capitalizeString('1bob')).toBe('1bob');
});

test('Ignore when number at beginning', () => {
  expect(capitalizeString('1bob')).toBe('1bob');
});

test('ca i break it?', () => {
  expect(capitalizeString(' bob')).toBe(' bob');
});
