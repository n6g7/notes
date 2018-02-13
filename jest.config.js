const threshold = 90

module.exports = {
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coveragePathIgnorePatterns: [
    'index.js$',
    'theme.js$',
    'redux/enhancers/middlewares.js$',
    'redux/store.js$'
  ],
  coverageThreshold: {
    global: {
      statements: threshold,
      branches: threshold,
      functions: threshold,
      lines: threshold
    }
  },
  moduleNameMapper: {
    '^@actions(.*)': '<rootDir>/src/redux/actions$1',
    '^@assets(.*)': '<rootDir>/src/assets$1',
    '^@notebooks(.*)': '<rootDir>/notebooks$1',
    '^@organisms(.*)': '<rootDir>/src/components/organisms$1',
    '^@pages(.*)': '<rootDir>/src/components/pages$1',
    '^@services(.*)': '<rootDir>/src/services$1',
    '^@templates(.*)': '<rootDir>/src/components/templates$1'
  },
  setupFiles: [
    './tests/setup.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testEnvironmentOptions: {
    url: 'https://abc.def.ghi/base'
  },
  transform: {
    '^.+\\.css$': './tests/emptyTransformer',
    '^.+\\.ipynb$': './tests/emptyTransformer',
    '^.+\\.jsx?$': './node_modules/babel-jest',
    '^.+\\.svg$': './tests/emptyTransformer'
  }
}
