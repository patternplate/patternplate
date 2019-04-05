module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: undefined,
  testMatch: ["**/*.test.ts?(x)"],
  globals: {
    "ts-jest": {
      compiler: "ttypescript"
    }
  }
};
