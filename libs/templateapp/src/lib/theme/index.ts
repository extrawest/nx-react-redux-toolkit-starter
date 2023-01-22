import { createTheme, alpha } from "@mui/material";
import { pxToRem } from "@mono-redux-starter/shared/utils";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		default: true;
	}
}

declare module "@mui/material/styles" {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Palette {
	}
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface PaletteOptions {
	}
}

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1440
		},
	},
	palette: {
		action: {
			selected: "#ffff"
		},
		background: {
			default: "#fafafa",
			paper: "#fff"
		},
		primary: {
			main: "#FFD85A",
			dark: "##F2994A",
			light: "rgba(0, 16, 100, 0.24)",
			contrastText: "#fff",
		},
		secondary: {
			main: "#373737",
			light: "#FFFFFF",
			dark: "#bcbcbc",
		},
		success: {
			main: "#219653"
		},
		error: {
			main: "#EB5757"
		},
		info: {
			main: "#2F80ED"
		}
	},
	typography: {
		fontFamily: "Roboto, sans-serif",
		h1: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 76,
			fontWeight: 900,
			lineHeight: "92px",
		},
		h2: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 54,
			fontWeight: 700,
			lineHeight: "64px",
		},
		h3: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 20,
			fontWeight: 800,
			lineHeight: "22px",
			letterSpacing: "0.02em",
		},
		h4: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 17,
			fontWeight: 600,
			lineHeight: "22px",
			letterSpacing: "0.0038em",
		},
		h5: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 16,
			fontWeight: 700,
			lineHeight: "20px",
			letterSpacing: "0.02em",
		},
		h6: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 13,
			fontWeight: 500,
			lineHeight: "18px",
			letterSpacing: "-0.00615385em",
		},
		body1: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 16,
			lineHeight: "20px",
			letterSpacing: "0.02em",
		},
		body2: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 17,
			lineHeight: "28px",
			letterSpacing: "0.02em",
		},
		caption: {
			fontFamily: "Roboto, sans-serif",
			fontSize: 11,
			lineHeight: "18px",
			letterSpacing: "-0.00615385em",
		}
	},
});

theme.components = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				fontSize: pxToRem(14),
				letterSpacing: 0.25,
				fontFamily: [
					"Roboto",
					"sans-serif"
				].join(",")
			},
			html: {
				fontSize: pxToRem(14),
			},
			"& *": {
				[theme.breakpoints.up("sm")]: {
					"&::-webkit-scrollbar": {
						width: theme.spacing(4 / 8)
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: theme.palette.common.white
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: alpha(
							theme.palette.common.black,
							.25
						),
						borderRadius: theme.spacing(2 / 8),
					}
				}
			},
		},
	}
};