import { createTheme } from "@mui/material/styles";
import { pxToRem, defaultBodyFontSize } from "@mono-redux-starter/shared/utils";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		default: true;
	}
}

declare module "@mui/material/styles" {
	interface Palette {
		available: Palette["primary"];
		reserved: Palette["primary"];
		sold: Palette["primary"];
	}
	interface PaletteOptions {
		available: PaletteOptions["primary"];
		reserved: PaletteOptions["primary"];
		sold: PaletteOptions["primary"];
	}
}

declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		xxl: true; // adds the `doubleLarge` breakpoint
	}
}

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			xxl: 3000
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
			main: "#001064",
			dark: "#6D7278",
			light: "rgba(0, 16, 100, 0.24)",
			contrastText: "#fff",
		},
		secondary: {
			main: "#ebebeb",
			light: "#d6d6d6",
			dark: "#bcbcbc",
		},
		info: {
			main: "#5f5fc4", //light blue
			light: "#8e2de2",
			dark: "#00b22c",
			contrastText: "#293780",
		},
		common: {
			white: "#fff",
			black: "#000",
		},
		success: {
			main: "#00ff22",
			dark: "#2b822d"
		},
		error: {
			light: "rgba(255, 0, 0, 0.5)",
			main: "#ff0000"
		},
		warning: {
			light:"rgba(255, 157, 0, 0.62)",
			main: "#ff9d00"
		},
		available: {
			main: "#d3ffdc",
			dark: "rgba(0, 255, 52, 0.674463)",
			contrastText: "#2b822d"
		},
		reserved: {
			main: "rgba(255, 157, 0, 0.174463)",
			dark: "rgba(255, 157, 0, 0.674463)",
			contrastText: "#ff9d00"
		},
		sold: {
			main: "rgba(255, 131, 131, 0.359309)",
			dark: "rgba(255, 131, 131, 0.859309)",
			contrastText: "#ff0000"
		},
		grey: {
			300: "rgba(55, 55, 55, 0.350771)",
			800: "#909090",
			900: "#7a7a7a"
		}
	},
});

theme.typography.h4 = {
	fontSize: pxToRem(40),
	[theme.breakpoints.down("xxl")]: {
		fontSize: pxToRem(26),
	},
	fontWeight: 550,
};

theme.typography.h5 = {
	fontSize: pxToRem(40),
	[theme.breakpoints.down("xxl")]: {
		fontSize: pxToRem(26),
	},
	fontWeight: 550,
};

theme.typography.button = {
	fontSize: pxToRem(23),
	[theme.breakpoints.down("xxl")]: {
		fontSize: pxToRem(15),
	},
	fontWeight: 550,
};

theme.typography.body1 = {
	fontSize: pxToRem(20),
	fontWeight: 550,
	[theme.breakpoints.down("xxl")]: {
		fontSize: pxToRem(14),
	},
};

theme.typography.body2 = {
	fontSize: pxToRem(24),
	letterSpacing: "2.8px",
	fontWeight: 550,
	[theme.breakpoints.down("xxl")]: {
		fontSize: pxToRem(16),
		letterSpacing: "1.82px"
	},
};

theme.typography.caption = {
	fontSize: pxToRem(19),
	fontWeight: 700,
	[theme.breakpoints.down("xxl")]: {
		fontSize: pxToRem(12),
	},
};

theme.components = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				fontSize: defaultBodyFontSize,
				letterSpacing: 0.25,
				fontFamily: [
					"Helvetica",
					'"Helvetica Neue"',
					'"Helvetica Neue Cyr"',
					"Roboto",
					"sans-serif"
				].join(",")
			},
			html: {
				fontSize: defaultBodyFontSize,
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
						backgroundColor: "rgba(0, 0, 0, 0.25)",
						borderRadius: theme.spacing(2 / 8),
					}
				}
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: theme.spacing(1),
				whiteSpace: "nowrap",
				boxShadow: "none",
				width: "unset",
				minWidth: "unset",
				fontSize: pxToRem(23),
				padding: theme.spacing(
					0,
					24 / 8
				),
				"& > span": {
					textOverflow: "ellipsis",
					overflow: "hidden",
					fontSize: pxToRem(21),
					[theme.breakpoints.down("xxl")]: {
						fontSize: pxToRem(13),
					},
				}
			},
		},
		variants: [
			{
				props: { variant: "default" },
				style: {
					color: "rgba(98, 88, 88, 0.8)",
					backgroundColor: "rgba(255, 255, 255, 0.59)",
					textTransform: "uppercase",
					padding: theme.spacing(
						22/8,
						10/8
					),
					[theme.breakpoints.down("xxl")]: {
						padding: theme.spacing(
							12/8,
							10/8
						),
					},
					borderRadius: 8,
					backdropFilter: "blur(78.8302px)",
					"&:hover": {
						backgroundColor: theme.palette.common.white,
					},
					"&:active": {
						backgroundColor: theme.palette.common.white,
					},
					"&:disabled": {
						backgroundColor: "rgba(255, 255, 255, 0.3)"
					}
				},
			},
		],
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				borderRadius: theme.spacing(1),
				background: "rgba(255, 255, 255, 0.81)",
				backdropFilter: "blur(5.2px)",
			}
		}
	},
	MuiMenu: {
		styleOverrides: {
			paper: {
				maxHeight: `${theme.spacing(280 / 8)}!important`,
				[theme.breakpoints.down("xxl")]: {
					maxHeight: `${theme.spacing(255 / 8)}!important`,
				},
			},
			list: {
				overflowY: "auto",
				maxHeight: `${theme.spacing(280 / 8)}!important`,
				paddingTop: theme.spacing(15 / 8),
				paddingBottom: theme.spacing(15 / 8),
				[theme.breakpoints.down("xxl")]: {
					maxHeight: `${theme.spacing(255 / 8)}!important`,
				},
			}
		}
	},
	MuiMenuItem: {
		styleOverrides: {
			root: {
				fontSize: pxToRem(15),
				fontWeight: 400,
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				paddingTop: theme.spacing(10 / 8),
				paddingBottom: theme.spacing(10 / 8),
				paddingLeft: theme.spacing(20 / 8),
				"&.Mui-selected": {
					background: theme.palette.common.white,
					fontWeight: 550,
				},
				[theme.breakpoints.down("xxl")]: {
					fontSize: pxToRem(13),
				},
			}
		}
	},
	MuiSelect: {
		styleOverrides: {
			standard: {
				color: theme.palette.common.white,
				background: "transparent",
				fontSize: pxToRem(21),
				"&.Mui-disabled.MuiInput-input.MuiInputBase-input.Mui-disabled": {
					color: theme.palette.common.white,
					WebkitTextFillColor: theme.palette.common.white,
					opacity: "0.6"
				},
				[theme.breakpoints.down("xxl")]: {
					fontSize: pxToRem(13),
				},
			},
			icon: {
				fill: theme.palette.common.white,
				fontWeight: 400,
				top: "calc(50% - 0.6em)",
				right: "-10px",
				"&.Mui-disabled": {
					opacity: "0.6",
				}
			}
		}
	},
	MuiTabs: {
		styleOverrides: {
			flexContainer: {
				gap: 24,
				[theme.breakpoints.down("xxl")]: {
					gap: 19,
				},
			},
			scrollButtons: {
				opacity: 1,
				"& > svg.MuiSvgIcon-root": {
					fill: "#fff",
					width: "36px",
					height: "33px",
				},
				"&.Mui-disabled": {
					opacity: "0.3",
				}
			},
			indicator: {
				backgroundColor: "transparent"
			}
		}
	},
	MuiTab: {
		styleOverrides: {
			root: {
				background: "rgba(255, 255, 255, 0.59)",
				borderRadius: "8px",
				backdropFilter: "blur(78.8302px)",
				fontWeight: 550,
				fontSize: pxToRem(23),
				letterSpacing: "2.68333px",
				color: "rgba(98, 88, 88, 0.8)",
				width: theme.spacing(120 / 8),
				height: theme.spacing(72 / 8),
				[theme.breakpoints.down("xxl")]: {
					width: theme.spacing(78 / 8),
					height: theme.spacing(48 / 8),
					fontSize: pxToRem(15),
					letterSpacing: "1.74px",
				},
				"&.Mui-selected": {
					color: "rgba(98, 88, 88)",
					background: "#fff"
				}
			}
		}
	},
	MuiTable: {
		styleOverrides: {
			root: {
				borderCollapse: "collapse",
			}
		}
	},
	MuiTableCell: {
		styleOverrides: {
			head: {
				textTransform: "uppercase",
				textAlign: "center",
				fontSize: pxToRem(23),
				fontWeight: "700",
				backgroundColor: theme.palette.common.white,
				padding: `0 ${theme.spacing(10 / 8)}`,
				height: `${theme.spacing(74 / 8)}`,
				maxHeight: `${theme.spacing(74 / 8)}`,
				color: theme.palette.common.black,
				[theme.breakpoints.down("xxl")]: {
					fontSize: pxToRem(15),
					height: `${theme.spacing(50 / 8)}`,
					maxHeight: `${theme.spacing(50 / 8)}`
				},
			},
			stickyHeader: {
				top: "-2px",
			},
			body: {
				textAlign: "center",
				borderRight: "1px solid #dcdcdc",
				alignItems: "center",
				fontWeight: 400,
				fontSize: 23,
				color: theme.palette.common.black,
				padding: `0 ${theme.spacing(10 / 8)}`,
				height: `${theme.spacing(74 / 8)}`,
				maxHeight: `${theme.spacing(74 / 8)}`,
				[theme.breakpoints.down("xxl")]: {
					height: `${theme.spacing(50 / 8)}`,
					maxHeight: `${theme.spacing(50 / 8)}`,
					fontSize: 15,
				},
				"&:last-child": {
					borderRight: "none",
				},
				"&:first-of-type": {
					background: "rgba(216, 216, 216, 0.12)"
				},
				"&:focus": {
					outline: "1px solid transparent"
				},
			}
		}
	}
};