import { Theme } from "@mui/material";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const menuItemStyles = {
	menuLink: {
		width: "100%",
		marginBottom: (theme: Theme) => theme.spacing(4 / 8),
		display: "inline-flex",
		fontSize: pxToRem(16),
		fontWeight: 400,
		lineHeight: "1.5",
		color: "primary.contrastText",
		textDecoration: "none",
		transition: "0.3s ease",
		cursor: "pointer",
		outline: "none",
		"&.active": {
			fontWeight: 600,
		},
		"&:hover": {
			opacity: "0.7",
			textDecoration: "none",
		},
		"&:focus": {
			opacity: "0.7",
		},
		"&.MuiTypography-root": {
			marginRight: 0,
		}
	},
	wrap: {
		paddingLeft: (theme: Theme) => theme.spacing(30 / 8),
	},
};
