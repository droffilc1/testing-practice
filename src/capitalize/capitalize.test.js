const capitalize = require ('./capitalize');

describe('capitalize', () => {
  test(' return first latter of string capitalized', () => {
    expect(capitalize("aa")).toBe('Aa');
  });
  test(' return first latter of string capitalized', () => {
    expect(capitalize("hello world")).toBe('Hello world');
  });
})