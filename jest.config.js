module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
};
