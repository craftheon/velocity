export default {
  testMatch: ['**/__test__/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  roots: ['./src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  // coverageReporters: ['lcov', 'text'],
  globals: {
    window: {},
  },
  modulePathIgnorePatterns: ['node_modules', 'e2e'],
};