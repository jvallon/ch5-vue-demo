module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    "**/src/**/*.spec.[jt]s?(x)",
  ],
  setupFiles: [
    // '<rootDir>/jest.init.js'
  ],
  moduleNameMapper: {
    // "mocks": "<rootDir>/tests/mocks",
  }
}
