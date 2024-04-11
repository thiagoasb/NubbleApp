module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
};
