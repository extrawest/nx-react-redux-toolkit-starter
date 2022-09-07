import {Theme} from "@mui/material";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const buttonStyles =  {
	tableBtn: {
		minWidth: (theme: Theme) => theme.spacing(100/8),
		minHeight: (theme: Theme) => theme.spacing(44/8),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: (theme: Theme) => theme.spacing(
			1.25,
			1.875
		),
		fontSize: pxToRem(14),
		fontWeight: 700,
		borderRadius: (theme: Theme) =>theme.spacing(2/8),
		overflow: "hidden",
		outline: "none",
		transition: "0.3 ease",

		"&.MuiButton-contained": {
			color: "primary.contrastText",
			"&.MuiButtonBase-root.MuiButton-root:hover": {
				backgroundColor: "primary.main",
				opacity: 0.8,
			}
		},

		"&:disabled": {
			opacity: 0.24,
		},
		//temporary property, not specified in the design
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.05)",
		},
		"&:focus": {
			backgroundColor: "rgba(0, 0, 0, 0.05)",
		}
	},
	disabled: {
		opacity: 0.24,
	}
};
