import { FC, useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
	AppBar,
	Box,
	Drawer,
	Toolbar,
	Link,
	IconButton,
	Typography,
	useTheme,
	useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppRouteEnum } from "../../types/paths";
import { MainLayoutProps } from "./MainLayout.types";
import { mainLayoutStyles } from "./MainLayout.styles";
import Sidebar from "../../components/Sidebar/Sidebar";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const theme = useTheme();

	const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box
			component="div"
			sx={mainLayoutStyles.layoutContainer}
		>
			<AppBar
				position="fixed"
				sx={mainLayoutStyles.appBar}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={toggleDrawer}
						sx={mainLayoutStyles.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Link
						sx={mainLayoutStyles.title}
						component={RouterLink}
						to={AppRouteEnum.DASHBOARD}
					>
						<Typography variant="h3">
							Lagoon
						</Typography>
					</Link>
				</Toolbar>
			</AppBar>
			<Drawer
				variant={isMdUp ? "permanent" : "temporary"}
				sx={mainLayoutStyles.drawer}
				anchor="left"
				open={open}
				onClose={toggleDrawer}
			>
				<Sidebar />
			</Drawer>
			<Box
				component="div"
				sx={mainLayoutStyles.contentWrap}
				id="pageWrap"
			>
				{children}
			</Box>
		</Box>
	);
};

export default MainLayout;
