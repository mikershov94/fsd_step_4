module.exports = {
  preset: "ts-jest",
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.ts"
  ]

};
