const {defaults} = require('jest-config');

module.exports = {
	// Below is configuration for setup with Typescript
	setupFiles: ['./jest.setup.js'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
	// Below is fix for .scss files with Jest
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css'
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	}
};
