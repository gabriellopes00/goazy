const config = require('./jest.config.js')
config.testMatch = [__dirname + '/__tests__/unit/**']
config.displayName = 'unit-tests'

module.exports = config
