module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["**/src/**/*.js"],
	coverageDirectory: "./coverage",
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	testMatch: [
		"**/__tests__/**/*.js?(x)",
		"**/?(*.)(-test).js?(x)"
	]
};
