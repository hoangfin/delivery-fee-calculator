/** @type {import("ts-jest").JestConfigWithTsJest} */
export default {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	rootDir: "./",
	coverageDirectory: "<rootDir>/coverage",
	collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
	coverageReporters: ["html"],
	testPathIgnorePatterns: ["<rootDir>/node_modules"],
	testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.spec.ts"]
};
