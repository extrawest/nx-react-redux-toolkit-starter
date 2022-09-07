import { FC } from "react";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import {
	Box,
	Link,
	MenuList,
	Typography
} from "@mui/material";
import { useIntl } from "react-intl";
import { logOut, updateIsLoggedIn } from "@mono-redux-starter/redux";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { AppRouteEnum } from "../../types";
import { MenuItem as StyledMenuItem } from "../common/MenuItem/MenuItem";
import { Button } from "../common/Button/Button";
import { getContentLinks } from "./Sidebar.menu";
import { sidebarStyles } from "./Sidebar.styles";

export const Sidebar: FC = () => {
	const intl = useIntl();
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();

	const { isLoading } = useTypedSelector(logOut.select());

	const handleLogOut = () => {
		// logout logic...
		dispatch(updateIsLoggedIn(false));
		navigate(AppRouteEnum.LOGIN);
	};

	return (
		<Box
			component="div"
			sx={sidebarStyles.sidebarContainer}
		>
			<Box
				component="div"
				sx={sidebarStyles.sidebarWrap}
			>
				<Link
					component={RouterLink}
					to={AppRouteEnum.DASHBOARD}
					sx={{
						...sidebarStyles.menuLink,
						...sidebarStyles.wrap
					}}
				>
					<Typography variant="h3">
						Lagoon
					</Typography>
				</Link>
			</Box>
			<Typography
				variant="caption"
				sx={{
					...sidebarStyles.wrap,
					...sidebarStyles.caption
				}}
			>
				{intl.formatMessage({
					id: "admin.editor",
					defaultMessage: "Editor"
				})}
			</Typography>
			<MenuList dense>
				{getContentLinks(intl)?.map(({ href, title }) =>
					<StyledMenuItem
						href={href}
						title={title}
						key={title}
					/>)
				}
			</MenuList>
			<Button
				variant="text"
				sx={{
					...sidebarStyles.btnOut,
					...sidebarStyles.wrap
				}}
				onClick={handleLogOut}
				isLoading={isLoading}
				isShowText
			>
				{intl.formatMessage({
					id: "admin.signOut",
					defaultMessage: "Sign Out"
				})}
			</Button>
		</Box>
	);
};

export default Sidebar;
