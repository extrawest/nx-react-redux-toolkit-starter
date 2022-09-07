import { FC } from "react";
import { Link, MenuItem as MuiMenuItem } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import { menuItemStyles } from "./MenuItem.styles";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem: FC<MenuItemProps> = ({ href, title}) => (
	<MuiMenuItem key={`menu${title}`}>
		<Link
			component={RouterLink}
			to={href}
			sx={{...menuItemStyles.menuLink,
				...menuItemStyles.wrap}}
		>
				{title}
		</Link>
	</MuiMenuItem>
);

export default MenuItem;
