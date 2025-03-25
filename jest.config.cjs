module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // TypeScript files
    "^.+\\.jsx?$": "babel-jest", // JS/JSX files
  },
};
