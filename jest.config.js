module.exports = {
    testPathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.js"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.svg$": "<rootDir>/src/tests/svgTransform.js"
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.jsx",
        "!**/*.test.jsx",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    coverageReporters: ["json", "lcov"]
}
