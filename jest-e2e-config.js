const config = require('./jest.config.js')
config.testMatch = [__dirname + '/__tests__/e2e/**']
config.displayName = 'e2e-tests'

module.exports = config
