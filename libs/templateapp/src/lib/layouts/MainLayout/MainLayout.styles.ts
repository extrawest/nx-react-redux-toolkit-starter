import { Theme } from "@mui/material";

export const mainLayoutStyles = {
	layoutContainer: {
		display: "flex",
		overflow: "hidden",
		height: "100vh"
	},
	appBar: {
		zIndex: 2,
		display: {
			xs: "flex",
			md: "none",
		}
	},
	drawer: {
		flexShrink: 0,
		width: "240px",
		backgroundColor: "primary.main",
		overflowY: "auto",
		"&.MuiDrawer-docked": {
			overflowX: "hidden",
		},
		"&.MuiDrawer-root>.MuiPaper-root": {
			width: "240px",
			position: "relative",
			top: "0",
			padding: (theme: Theme) => theme.spacing(
				6.25,
				0,
				5
			),
			backgroundColor: "primary.light",
			border: "none",
			scrollWidth: 0,
			overflowX: "hidden",

			"&::-webkit-scrollbar-track": {
				backgroundColor: "primary.main",
			},
			"&::-webkit-scrollbar-thumb": {
				backgroundColor: "info.contrastText",
			},
		}
	},
	menuButton: {
		marginRight: (theme: Theme) => theme.spacing(2),
		display: {
			xs: "flex",
			md: "none",
		},
	},
	contentWrap: {
		marginTop: {
			xs: "48px",
			sm: "64px",
			md: 0,
		},
		padding: 0,
		overflowX: "hidden",
		width: "100%",
	},
	title: {
		color: "primary.contrastText",
		textDecoration: "none",
		transition: "0.3s ease",
		cursor: "pointer",
		"&:hover": {
			opacity: "0.7",
			textDecoration: "none",
		},
	},
};
