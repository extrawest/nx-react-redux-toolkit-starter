import { Theme } from "@mui/material";

export const dashboardStyles =  {
	dashboardContainer: {
		width: "100%",
		minHeight: "100vh",
		display: "flex",
		padding: (theme: Theme) => theme.spacing(
			6.25,
			4.75
		),
		flexDirection: "column",
		backgroundColor: "background.paper",
	},
	skeleton: {
		width: `calc(30% - 40px)`,
	},
	groupContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		gap:  (theme: Theme) => theme.spacing(
			0,
			40
		),
	},
	groupWrap: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		marginBottom: (theme: Theme) => theme.spacing(40/8),
		gap:  (theme: Theme) => theme.spacing(40/8),
	},
	groupTitle: {
		marginBottom: (theme: Theme) => theme.spacing(14/8),
	},
};
