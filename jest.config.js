module.exports = {
  roots: ["<rootDir>/"],
  testMatch: ["src/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
