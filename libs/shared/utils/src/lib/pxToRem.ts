export const defaultBodyFontSize = 16;

export const pxToRem = (value: number) => {
	return `${value / defaultBodyFontSize}rem`;
};