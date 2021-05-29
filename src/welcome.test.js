const {welcome} = require('./welcome.js')

test('Say hello world as welcome message', () => {
  expect(welcome.message()).toBe("Hello World!!")
});