/* eslint-disable */
export default {
	displayName: 'templateapp',
	preset: '../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../coverage/libs/templateapp',
};
