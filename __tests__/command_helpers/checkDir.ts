import checkDir from '../../src/extensions/functions/checkDir'
import context from 'gluegun'

test('checkDir detects an existing dir', () => {
  // Check for a known directory
  const location = './src'
  // Use checkDir to make sure it exists
  expect(checkDir({ location }, context)).toBeTruthy()
})

test('checkDir can fail', () => {
  // Use checkDir to make sure a non-existant directory returns false
  expect(checkDir({ location: 'DOES_NOT_EXIST' }, context)).toBeFalsy()
})

test('checkDir returns false for a file that exists', () => {
  // Use checkDir to make sure a known file returns false since it's not a directory
  expect(checkDir({ location: './package.json' }, context)).toBeFalsy()
})

test('checkDir returns false if no location is set', () => {
  expect(checkDir({}, context)).toBeFalsy()
})
