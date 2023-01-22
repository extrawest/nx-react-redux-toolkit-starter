import { pxToRem } from "@mono-redux-starter/shared/utils";

export const textFieldStyles = {
	inputStyle: {
		"& input": {
			fontSize: pxToRem(14),
			fontWeight: 600,
		},
		"& .MuiInputAdornment-root .MuiTypography-root.MuiTypography-body1": {
			fontSize: pxToRem(14),
			fontWeight: 500,
		}
	}
};
