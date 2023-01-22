import { pxToRem } from "@mono-redux-starter/shared/utils";
import { Theme } from "@mui/material";

export const cardStyles =  {
	cardLink: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 0,
		flexShrink: 0,
		width: "calc(33% - 40px)",
		padding: (theme: Theme) => theme.spacing(
			3,
			2.375
		),
		fontSize: pxToRem(16),
		fontWeight: 400,
		lineHeight: "1.5",
		backgroundColor: "common.white",
		color: "common.black",
		textDecoration: "none",
		borderRadius: "2px",
		overflow: "hidden",
		transition: "0.3s ease",
		cursor: "pointer",
		"&:hover": {
			opacity: "0.9",
			textDecoration: "none",
			boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.15) "
		},
		"&.MuiTypography-root": {
			marginRight: 0,
		}
	},
	cardTitle: {
		opacity: 0.5
	},
};
