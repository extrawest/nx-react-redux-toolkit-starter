import { Theme } from "@mui/material";

export const useStyles = {
	wrapper: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontFamily: "Poppins",
		color: "text.primary",
		marginBottom: (theme: Theme) => theme.spacing(1),
	},
	subtitle: {
		color: "text.primary",
		width: (theme: Theme) => theme.spacing(260 / 8),
	}
};
