const { expect } = require('@jest/globals');
const reverseString = require('./reverseString');

test('reverse a string', () => {
  expect(reverseString('bobey')).toBe('yebob');
});

test('reverse with white space', () => {
  expect(reverseString('  123 idk')).toBe('kdi 321  ');
});
