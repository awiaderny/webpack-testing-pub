// tslint:disable-next-line: file-name-casing
const selectElementHeadingAnimation = () => [
	{x: '-=100', opacity: 0},
	{
		duration: 3,
		opacity: 1,
		stagger: 0.2,
		x: '0'
	}
];

const selectElementWrapperAnimation = () => [
	{x: '+=100', opacity: 0},
	{
		duration: 3,
		opacity: 1,
		stagger: 0.2,
		x: '0'
	}
];

export {selectElementHeadingAnimation, selectElementWrapperAnimation};
