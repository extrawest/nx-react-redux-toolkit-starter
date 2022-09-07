import { Theme } from "@mui/material";
import { pxToRem } from "@mono-redux-starter/shared/utils";

export const commonFormStyles = {
	wrapper: {
		boxSizing: "border-box",
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		color: "primary.main",
	},
	titleWrap: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: (theme: Theme) => theme.spacing(24 / 8),
	},
	title: {
		marginBottom: (theme: Theme) => theme.spacing(12 / 8),
		color: "common.black"
	},
	removeBtn: {
		color: "error.main",
		textDecoration: "underline",
		transition: "opacity 0.3s ease",
		"&:hover": {
			textDecoration: "underline",
			backgroundColor: "ransparent",
			opacity: 0.8
		}
	},
	editSmBtn: {
		color: "common.black",
	},
	field: {
		margin: (theme: Theme) => theme.spacing(
			1.25,
			0
		),
		"&:hover": {
			borderColor: "primary.main",
			"& .MuiFormLabel-root.MuiInputLabel-root": {
			}
		},
		"&:focus": {
			borderColor: "primary.main",
		},
	},
	headerWrapper: {
		marginBottom: (theme: Theme) => theme.spacing(5)
	},
	btnWrap: {
		marginTop: (theme: Theme) => theme.spacing(70 / 8),
		display: "flex",
		justifyContent: "space-between",
	},
	editBtn: {
		padding: (theme: Theme) => theme.spacing(
			1.5,
			2.75
		),
		width: (theme: Theme) => theme.spacing(100 / 8),
	},
	addBtn: {
		minWidth: (theme: Theme) => theme.spacing(100 / 8),
	},
	featureWrap: {
		display: "flex",
		flexDirection: "column",
	},
	feature: {
		width: "100%",
		border: "1px solid red",
		justifyContent: "space-between",
	},
	formControl: {
		width: "100%",
		justifyContent: "space-between",
		borderBottom: "1px solid",
		borderColor: "success.main",
		padding: (theme: Theme) => theme.spacing(
			1.25,
			0
		),
		"& .MuiFormControlLabel-label": {
			color: "common.black",
			fontSize: pxToRem(14),
			fontWeight: 500,
		},
		"&.MuiFormControlLabel-root": {
			margin: 0,
		},
	},
	selectStyle: {
		paddingRight: 0,

		"& svg": {
			position: "absolute",
			right: (theme: Theme) => theme.spacing(15 / 8),
			pointerEvents: "none",
		},
	},
	subtitle: {
		marginLeft: (theme: Theme) => theme.spacing(5 / 8),
		color: "primary.dark",
	},
	addWrap: {
		display: "flex",
		alignItems: "flex-start",
		"& button": {
			marginRight: (theme: Theme) => theme.spacing(16 / 8),
		}
	},
};
