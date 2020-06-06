module.exports = {
    preset: 'ts-jest',
    collectCoverage: false,
    verbose: true,
    globalSetup: './jest.global-setup.js',
    globalTeardown: './jest.global-teardown.js',
    testEnvironment: './puppeteer-environment.js'
}