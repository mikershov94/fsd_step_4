module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.ts"
  ]

};
