import data from '../src'

test('should return array', () => {
  expect(data).toBeDefined()
  expect(Array.isArray(data)).toBeTruthy()
})
