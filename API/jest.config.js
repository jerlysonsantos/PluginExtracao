module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  moduleNameMapper: {
    '@injection-dependency': '<rootDir>/src/lib/dependency-injection',
    '@jest-providers': '<rootDir>/src/lib/jest-providers/jest-providers.lib.ts',
    '@repository': '<rootDir>/src/lib/repository',
    '@routers': '<rootDir>/src/lib/routers',
  },
};
