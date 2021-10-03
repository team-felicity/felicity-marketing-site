import { toDefaultDateFormat } from './functions'

test('Default Date Formatter', () => {
  expect(toDefaultDateFormat(new Date('1/1/2000'))).toBe('Jan 1, 2000')
})
