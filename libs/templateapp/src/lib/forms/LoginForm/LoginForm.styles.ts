import { Theme } from "@mui/material";

export const loginStyles = {
	pageContent: {
		width: (theme: Theme) => theme.spacing(343 / 8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "stretch",
		padding: 0,
		color: "primary.main"
	},
	title: {
		textAlign: "center",
		marginBottom: (theme: Theme) => theme.spacing(62 / 8),
	}
};
