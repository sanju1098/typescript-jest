module.exports = {
	moduleNameMapper: {
		"^@src/(.*)$": "<rootDir>/src/$1",
	},
	testEnvironment: "jsdom",
	preset: "ts-jest",
};
