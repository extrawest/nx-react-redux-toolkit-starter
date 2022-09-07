import {Theme} from "@mui/material";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const textFieldStyles =  {
	inputStyle: {
		"& input": {
			width: (theme: Theme) => theme.spacing(159 / 8),
			padding: (theme: Theme) => theme.spacing(
				1.5,
				2
			),
			fontSize: pxToRem(14),
			fontWeight: 600,
		},
		"& .MuiInputAdornment-root .MuiTypography-root.MuiTypography-body1": {
			fontSize: pxToRem(14),
			fontWeight: 500,
		}
	}
};
