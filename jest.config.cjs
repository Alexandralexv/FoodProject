// jest.config.cjs
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "(.+)\\.js$": "$1",
  },
  testMatch: ["<rootDir>/assets/__test__/**/*.test.js"],
};
