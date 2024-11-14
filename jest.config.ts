const config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.ts",
    "^../../assets/(.*)": "<rootDir>/__mocks__/fileMock.ts",
  },
};

export default config;
