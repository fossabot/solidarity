const realThing = require('gluegun')
const realSolidarityContext = require('../../src/extensions/solidarity-extension')
realSolidarityContext(realThing)

const noConfigSolidarity = {
  checkRequirement: jest.fn(),
  getSolidaritySettings: jest.fn(() => ({})),
  printResults: jest.fn(),
  setSolidaritySettings: jest.fn(),
  updateRequirement: jest.fn(),
  updateVersions: jest.fn(() => Promise.resolve()),
}

const mockContext = {
  ...realThing,
  outputMode: undefined,
  system: {
    startTimer: jest.fn(() => jest.fn()),
  },
  print: {
    error: jest.fn(),
    success: jest.fn(),
    info: jest.fn(),
    spin: jest.fn(() => ({
      stop: jest.fn(),
      fail: jest.fn(),
      succeed: jest.fn(),
    })),
    table: jest.fn(),
    xmark: jest.fn(),
    checkmark: jest.fn(),
    color: {
      green: jest.fn(),
      red: jest.fn(),
      blue: jest.fn(),
    },
    colors: {
      green: jest.fn(),
      red: jest.fn(),
      blue: jest.fn(),
    },
  },
  printSeparator: jest.fn(),
  parameters: {
    options: {},
  },
  prompt: {
    ask: jest.fn(() => Promise.resolve({ createFile: true })),
  },
  solidarity: noConfigSolidarity,
}

module.exports = mockContext
